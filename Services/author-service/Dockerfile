FROM golang:1.25.1

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY *.go ./
RUN go build -o /pingpong

EXPOSE 8085

CMD [ "/pingpong" ]