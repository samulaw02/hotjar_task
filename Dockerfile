FROM node:14.15.4
WORKDIR /usr/app/hotjar
COPY . ./
RUN npm install pnpm -g
RUN pnpm install
RUN pnpm build
EXPOSE 8080
CMD [ "node", "./dist" ]