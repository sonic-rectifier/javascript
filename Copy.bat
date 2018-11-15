@echo off

set location=%~dp0
echo %location%

path=%location%



pscp -r -pw southhills# galen@23.30.218.171:/var/www/html/galen/*.* "%location%\temp" 

pause