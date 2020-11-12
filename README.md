# react-tool-boiler-plate

# dtsgenerator

# you can generate all interfaces required from swagger, instead of creating all. Follow the following steps to do so.

1. GoTo swagger, and click (url)/v2/api-docs, which will open a json.
2. Copy the json, and paste in sw1.json file.
   If there are more than one connection, you can either combine the project and create one json, or paste the second json file in sw2.json.
   you can combine the projects by following the below article.

# https://dev.to/eon/how-to-consolidate-api-documentation-in-a-spring-boot-microservices-environment-dgd

3. run npm dtsgen command in cmd.
4. All the interfaces imported from swagger, will be available in Definations object.
5. just use Defination dot with the required interface in the project.
