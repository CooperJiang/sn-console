#!/usr/bin/env bash
npm config get registry 
npm config set registry=http://registry.npmjs.org
echo '请进行登录:'
npm login #登录
echo '===========publish=========='
npm publish #发布
npm config set registry=http://registry.npm.taobao.org
echo '发布完成'
exit