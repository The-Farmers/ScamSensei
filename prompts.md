# Prompt Engineering

## Tested prompts

```
Is the following email a scam: 
${mail.text}
```

```
Is this a scam email:
${mail.text}
```
    
```
Can you craft an email to reply whether the following email is scam or not:
"""
${mail.text}
"""
```

```
Senior citizens who are likely of getting scammed have sent an email to ask whether the following email is a scam. Can you help craft an email to respond whether this is scam or not with language that is targeted towards senior citizens?
"""
${mail.text}
"""
```

```
Senior citizens who are likely of getting scammed have sent an email to ask whether the following email is a scam. Can you help craft an email to respond to the senior citizen whether the email they received is scam or not with language that is targeted towards senior citizens? Please refer to them with a general greeting and sign off as Scam Sensei.
"""
${mail.text}
"""
```

```
Senior citizens who are likely of getting scammed have sent an email to ask whether the following email is a scam. Can you help craft an email to respond to the senior citizen whether the email they received is scam or not with language that is targeted towards senior citizens? Please refer to them with a general greeting and sign off as Scam Sensei. Do not include anything in your response other than the email body.
"""
${mail.text}
"""
```

```
Senior citizens who are likely of getting scammed have sent an email to ask whether the following email is a scam. Can you help craft an email to respond to the senior citizen whether the email they received is scam or not with language that is targeted towards senior citizens? Please refer to them with "Hi there" and sign off as "Scam Sensei". Do not include anything in your response other than the email body.
"""
${mail.text}
"""
```

```
Senior citizens who are likely of getting scammed have sent an email to ask whether the following email is a scam. Can you help craft an email to respond to the senior citizen whether the email they received is scam or not with language that is targeted towards senior citizens? Please refer to them with "Hi there" and sign off as "Scam Sensei". Do not include anything in your response other than the email body. Can you also bold whether it is scam or not scam?
"""
${mail.text}
"""
```

## Selected prompt

```
Senior citizens who are likely of getting scammed have sent an email to ask whether the following email is a scam. Can you help craft an email to respond to the senior citizen whether the email they received is scam or not with language that is targeted towards senior citizens? Please refer to them with "Hi there" and sign off as "Scam Sensei". Do not include anything in your response other than the email body.
"""
${mail.text}
"""
```