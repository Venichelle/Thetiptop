FROM php:7.3-apache
ENV COMPOSER_ALLOW_SUPERUSER=1
ENV COMPOSER_MEMORY_LIMIT=-1 
RUN apt-get update
RUN pecl install xdebug \  
    && docker-php-ext-enable xdebug  
RUN apt-get install -y \
    curl \
    nano \
    git \
    libicu-dev \
    unzip \
    zip && \
    curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer && \
    apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
RUN rm -rf /var/lib/apt/lists/ && curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install nodejs -y

RUN docker-php-ext-install pdo \
	&& docker-php-ext-install pdo_mysql \
	&& docker-php-ext-install opcache

COPY $PWD/db/apache/app_php.ini /usr/local/etc/php/conf.d/app_php.ini
COPY $PWD/db/docker/apache/apache.conf /etc/apache2/sites-available/docker.conf
COPY $PWD/db/docker/apache/security.conf /etc/apache2/conf-available/security.conf

RUN cp /etc/apache2/mods-available/rewrite.load /etc/apache2/mods-enabled/ && \
    cp /etc/apache2/mods-available/headers.load /etc/apache2/mods-enabled/
    
RUN a2dissite 000-default default-ssl
RUN a2ensite docker

COPY $PWD /var/www
WORKDIR /var/www/src

RUN npm install -g yarn
RUN yarn install 
RUN yarn encore dev

RUN ln -sf /dev/stdout /var/log/apache2/project_access.log \
	&& ln -sf /dev/stderr /var/log/apache2/project_error.log

EXPOSE 80

RUN composer install

RUN chown -R www-data var/