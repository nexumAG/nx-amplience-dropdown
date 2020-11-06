# nx-amplience-dropdown

This amplience extension is designed to show a dropdown with the following features:

- Default value
- No 'none' option
- Use key/label (show label, send key)

## Development

Create a localhost certificate and add it to your browser as trusted

```
openssl req -x509 -out localhost.crt -keyout localhost.key \
  -days 365 \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```
