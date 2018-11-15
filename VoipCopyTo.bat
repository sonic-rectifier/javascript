@echo off

set location=%~dp0
echo %location%

path=%location%

pscp -r -pw southhills# "%location%\voip_files\sip.conf" voip@172.19.108.115:/etc/asterisk
pscp -r -pw southhills# "%location%\voip_files\extensions.conf" voip@172.19.108.115:/etc/asterisk
pscp -r -pw southhills# "%location%\voip_files\extras\*.*" voip@172.19.108.115:/usr/share/asterisk/sounds/extras
pscp -r -pw southhills# "%location%\voip_files\recordings\*.* " voip@172.19.108.115:/usr/share/asterisk/sounds/recordings
pscp -r -pw southhills# "%location%\voip_files\voicemail.conf" voip@172.19.108.115:/etc/asterisk
pscp -r -pw southhills# "%location%\voip_files\queues.conf" voip@172.19.108.115:/etc/asterisk
pscp -r -pw southhills# "%location%\voip_files\musiconhold.conf" voip@172.19.108.115:/etc/asterisk
pscp -r -pw southhills# "%location%\voip_files\ivr\*.* " voip@172.19.108.115:/usr/share/asterisk/sounds/ivr
pscp -r -pw southhills# "%location%\voip_files\features.conf" voip@172.19.108.115:/etc/asterisk
pscp -r -pw southhills# "%location%\voip_files\res_parking.conf" voip@172.19.108.115:/etc/asterisk
pscp -r -pw southhills# "%location%\voip_files\confbridge.conf" voip@172.19.108.115:/etc/asterisk



pause