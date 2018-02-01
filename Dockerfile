FROM nginx:1.13.8

COPY ./assets/default.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /var/www
RUN mkdir -p /var/www/battleship

COPY ./dist /var/www/battleship
