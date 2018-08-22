Simple load test api

1. clone the repository
2. npm install

REQUEST Format:

{
	"url":"your api url",
	"method":"POST",
	"request": {
        "mes": "book a flight from bangalore to mumbai",
        "stack": [],
        "gmt_offset": "+5:30"
    },
    "count": 20
}
