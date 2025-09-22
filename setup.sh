#install Apache
#!/bin/bash
sudo apt update
sudo apt upgrade 

NEW_DOCUMENT_ROOT="/webpages"
NEW_DIRECTORY_INDEX="index.html"

mv . ..
cd .. 

sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/000-default.conf.bak

sudo sed -i "s|DocumentRoot .*|DocumentRoot $NEW_DOCUMENT_ROOT|" /etc/apache2/sites-available/000-default.conf

sudo sed -i "s|DirectoryIndex .*|DirectoryIndex $NEW_DIRECTORY_INDEX|" /etc/apache2/sites-available/000-default.conf



#install disc-bot
#install ssh
#install ftp
#setup Minecraft as service