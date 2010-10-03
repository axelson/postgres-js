#!/bin/sh

psql postgres < demo.sql
echo
echo "Now run 'node demo.js'";
