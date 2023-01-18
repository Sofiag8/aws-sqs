# AWS SQS-CLIENT LIBRARY WITH NESTJS

# <a name="Requirements">Requirements</a>

Before installing the library, follow this steps carefully.

[AWS Command Line Interface version 2](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html 'AWS Command Line Interface') (AWS CLI).

- In your terminal execute the command `aws configure` and complete the following data

```shell
$ aws configure
AWS Access Key ID [None]: XXXXXXXXXXX
AWS Secret Access Key [None]:  XXXXXXXXXXXXXXXXXXXXXX
Default region name [None]: XXXXXXX
Default output format [None]: json
```

If using temporary security credentials you must set the aws_session_token at aws config file `(~/.aws/credentials)`

Then

```shell
npm i sqs-private-library
```
