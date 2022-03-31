FROM docker.io/nginx:latest
COPY wdio.conf.ts /usr/share/nginx/html
