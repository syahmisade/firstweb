# firstweb
Trying to learn my first website 

Tutorial followed: https://youtu.be/pmvEgZC55Cg?si=hfp1hVKwJBQgQdk6

Starter propmt:
npm init -y
npm install express cookie-parser mailtrap bcryptjs dotenv jsonwebtoken mongoose crypto
    -> npm warn deprecated crypto@1.0.1: This package is no longer supported. It's now a built-in Node module. If you've depended on crypto, you should switch to the one that's built-in.

Important notes:
- ("type":"module",) in package.json so that we can use the import export thingy 
- "scripts": {
    "dev":"nodemon backend/index.js"
  }, -> Just learned about this ehek