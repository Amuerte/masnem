FROM tutum/lamp:latest
  RUN rm -rf /app && mkdir /app
  ADD ./dist /app
EXPOSE 80 3306
CMD ["/run.sh"]
