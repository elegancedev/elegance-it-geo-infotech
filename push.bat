@echo off
echo ============================================
echo   Elegance IT & Geo Infotech - Git Push
echo ============================================
echo.

cd /d "%~dp0"

echo [1/3] Staging changes...
git add .

echo.
echo [2/3] Committing changes...
set /p msg="Enter commit message (or press Enter for auto message): "
if "%msg%"=="" set msg=Update project files
git commit -m "%msg%"

echo.
echo [3/3] Pushing to GitHub...
git push

echo.
echo ============================================
echo   Done! Press any key to exit...
echo ============================================
pause >nul
