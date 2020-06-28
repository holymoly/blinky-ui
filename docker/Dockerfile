FROM nginx
COPY blinky-ui /usr/share/nginx/html
EXPOSE 80
STOPSIGNAL SIGTERM
CMD ["nginx", "-g", "daemon off;"]