# ==============================================================================
# Dockerfile for Bake Bliss (PHP 8.2 + Apache + MySQL extensions)
# ==============================================================================

FROM php:8.2-apache

# Install CA certificates for secure SSL/TLS connections (e.g. TiDB Cloud Serverless)
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Install required PHP extensions for MySQL connectivity
RUN docker-php-ext-install pdo pdo_mysql mysqli

# Enable Apache mod_rewrite for URL handling
RUN a2enmod rewrite

# Set the document root as working directory
WORKDIR /var/www/html

# Copy application source code into Apache document root
COPY . /var/www/html/

# Ensure uploads directory exists with writable permissions for Apache (www-data)
RUN mkdir -p /var/www/html/uploads \
    && chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html \
    && chmod -R 777 /var/www/html/uploads

# Expose standard HTTP port
EXPOSE 80

# Configure Apache to bind dynamically to $PORT (for Railway, Render, Fly.io, Cloud Run)
# or default to port 80 if $PORT is not specified.
CMD ["sh", "-c", "sed -i \"s/80/${PORT:-80}/g\" /etc/apache2/ports.conf /etc/apache2/sites-available/000-default.conf && apache2-foreground"]
