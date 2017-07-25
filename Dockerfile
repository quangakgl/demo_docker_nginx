FROM mhart/alpine-node
WORKDIR //C:/Users/quang/Desktop/bt/demovuecli
COPY . //C:/Users/quang/Desktop/bt/demovuecli
EXPOSE 3000
RUN npm install
CMD npm run dev
