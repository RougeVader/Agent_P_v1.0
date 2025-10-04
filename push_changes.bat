@echo off

echo ==================================================
echo  This script will commit and push your recent UI changes.
echo ==================================================
echo.
echo Here are the changes that will be committed:
echo.
git status
echo.

set /p "confirm=Are you sure you want to commit and push these changes? (y/n): "
if /i "%confirm%" neq "y" (
    echo Aborted.
    exit /b
)

echo.
echo Staging all changes...
git add .

echo.
echo Committing changes...
git commit -m "feat: Polish UI and improve AI response clarity"

echo.
echo Pushing to GitHub...
git push

echo.
echo ==================================================
echo  Done.
echo ==================================================
