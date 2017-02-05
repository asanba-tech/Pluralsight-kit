# js-starter-kit
JavaScript starter kit based on Cory House Pluralsight training course

# Notes on adding travis to heroku deployment
bash-3.2$ heroku login
Enter your Heroku credentials.
Email: ***
Password (typing will be hidden):
Logged in as ***

bash-3.2$ travis setup heroku -r ***/js-starter-kit
Heroku application name: |js-starter-kit| ***-js-starter-kit
Deploy only from ***/js-starter-kit? |yes| yes
Encrypt API key? |yes| yes

bash-3.2$ git add .
bash-3.2$ git commit -m 'Added deploy configuration to travis so that it deploys direct to heroku'
[master 83b6068] Added deploy configuration to travis so that it deploys doirect to heroku
 1 file changed, 8 insertions(+), 1 deletion(-)
bash-3.2$ git push
Counting objects: 3, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 955 bytes | 0 bytes/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local objects.
To https://github.com/***/js-starter-kit.git
   6590f16..83b6068  master -> master
bash-3.2$
