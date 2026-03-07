@echo off
REM Script para abrir el portafolio en el navegador predeterminado
REM Este archivo inicia el portafolio directamente sin necesidad de servidor

cd /d "%~dp0"
start index.html

echo ========================================
echo Portafolio abierto en el navegador
echo ========================================
pause
