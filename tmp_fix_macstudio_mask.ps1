$ErrorActionPreference = 'Stop'

$base = 'C:\Users\Eugen\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\powershell'
$refs = @(
    (Join-Path $base 'System.Drawing.Common.dll'),
    (Join-Path $base 'System.Drawing.Primitives.dll'),
    (Join-Path $base 'System.Private.Windows.Core.dll'),
    (Join-Path $base 'System.Private.Windows.GdiPlus.dll'),
    (Join-Path $base 'System.Runtime.dll'),
    (Join-Path $base 'System.Runtime.InteropServices.dll')
)
Add-Type -Path $refs
Add-Type -ReferencedAssemblies $refs @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public static class MacStudioMaskFix
{
    private static bool InsideRoundedRect(int x, int y, int left, int top, int right, int bottom, int radius)
    {
        if (x < left || x > right || y < top || y > bottom) return false;
        if (x >= left + radius && x <= right - radius) return true;
        if (y >= top + radius && y <= bottom - radius) return true;

        int cx = x < left + radius ? left + radius : right - radius;
        int cy = y < top + radius ? top + radius : bottom - radius;
        int dx = x - cx;
        int dy = y - cy;
        return dx * dx + dy * dy <= radius * radius;
    }

    public static void Run(string inputPath, string outputPath)
    {
        using (var source = new Bitmap(inputPath))
        using (var source24 = new Bitmap(source.Width, source.Height, PixelFormat.Format24bppRgb))
        {
            using (var graphics = Graphics.FromImage(source24))
                graphics.DrawImageUnscaled(source, 0, 0);

            int width = source24.Width;
            int height = source24.Height;
            var sourceData = source24.LockBits(new Rectangle(0, 0, width, height), ImageLockMode.ReadOnly, PixelFormat.Format24bppRgb);
            int stride = sourceData.Stride;
            byte[] pixels = new byte[stride * height];
            Marshal.Copy(sourceData.Scan0, pixels, 0, pixels.Length);
            source24.UnlockBits(sourceData);

            using (var result = new Bitmap(width, height, PixelFormat.Format32bppArgb))
            {
                var resultData = result.LockBits(new Rectangle(0, 0, width, height), ImageLockMode.WriteOnly, PixelFormat.Format32bppArgb);
                int resultStride = resultData.Stride;
                byte[] output = new byte[resultStride * height];

                const int left = 188;
                const int top = 165;
                const int right = 1067;
                const int bottom = 1043;
                const int radius = 145;

                for (int y = 0; y < height; y++)
                for (int x = 0; x < width; x++)
                {
                    int sourceOffset = y * stride + x * 3;
                    int resultOffset = y * resultStride + x * 4;
                    output[resultOffset] = pixels[sourceOffset];
                    output[resultOffset + 1] = pixels[sourceOffset + 1];
                    output[resultOffset + 2] = pixels[sourceOffset + 2];
                    output[resultOffset + 3] = InsideRoundedRect(x, y, left, top, right, bottom, radius) ? (byte)255 : (byte)0;
                }

                Marshal.Copy(output, 0, resultData.Scan0, output.Length);
                result.UnlockBits(resultData);
                result.Save(outputPath, ImageFormat.Png);
            }
        }
    }
}
"@

$input = 'C:\Users\Eugen\.codex\generated_images\01a02f0e-4ab8-76a3-a39a-28c9756a3d7a\exec-bfb73361-a7fe-4c82-84a0-3db67607aacd.png'
$output = Join-Path (Get-Location) 'assets\images\macstudio-m4-ultra-transparent.png'
[MacStudioMaskFix]::Run($input, $output)
Write-Output $output
