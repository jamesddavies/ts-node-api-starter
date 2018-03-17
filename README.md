# TS-Node-API-Starter

#### A starter for Node.js JSON REST APIs built with TypeScript.

---

Using:

[Express](https://expressjs.com/) for routing\
[Winston](https://github.com/winstonjs/winston) and [Morgan](https://github.com/expressjs/morgan) for logging\
[Mocha](https://mochajs.org/) and [Chai](http://www.chaijs.com/) for testing\
[ts-node](https://github.com/TypeStrong/ts-node) for TypeScript execution

---

### Installation

Clone the repository

Install:
```javascript
npm install
```

Development:
```javascript
npm run dev
```

Testing:
```javascript
npm test
```

Start:
```javascript
npm start
```

### Folder structure

|-- src\
|&nbsp;&nbsp;&nbsp;&nbsp;-- config\
|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;-- config.ts\
|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;-- express.ts\  
|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;-- winston.ts\ 
|&nbsp;&nbsp;&nbsp;&nbsp;-- controllers\
|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;index.controller.ts\
|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;utilities.controller.ts\
|&nbsp;&nbsp;&nbsp;&nbsp;-- routes\
|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;index.route.ts\
|&nbsp;&nbsp;&nbsp;&nbsp;-- tests\
|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;index.schema.ts\
|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;index.spec.ts\
&nbsp;&nbsp;&nbsp;&nbsp;app.ts\

## License

MIT