FROM tutum/lamp:latest
  RUN rm -rf /app && mkdir /app
  ADD ./www/sam /app
EXPOSE 80 3306
CMD ["/run.sh"]
