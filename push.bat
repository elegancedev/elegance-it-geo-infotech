@echo off
title Elegance IT & Geo Infotech - Git Push
color 0A
mode con cols=70 lines=25

echo.
echo  ===============================================
echo     Elegance IT ^& Geo Infotech - Git Push
echo  ===============================================
echo.

cd /d "%~dp0"

echo [*] Checking Git status...
git status

echo.
echo [*] Staging all changes...
git add .

echo.
echo [*] Committing changes...
echo.
set /p msg="Enter commit message (press Enter for default): "
if "%msg%"=="" set msg=Update project files
git commit -m "%msg%"

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Commit failed! Check your git config.
    echo.
    pause
    exit /b 1
)

echo.
echo [*] Pushing to GitHub...
git push origin main

if %errorlevel% neq 0 (
    echo.
    echo [WARNING] Push failed! Check your internet connection.
    echo.
    pause
    exit /b 1
)

echo.
echo  ===============================================
echo     SUCCESS! Website updated on GitHub
echo     Vercel will auto-deploy shortly
echo  ===============================================
echo.

pause
