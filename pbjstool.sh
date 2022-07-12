#!/bin/bash

generate_pbjs() {
  filename=$1
  output_dir=$2
  if [ ${filename##*.} != "proto" ]
  then
    return
  fi

  input_proto=$output_dir/${filename}
  output_js=$output_dir/${filename%%.*}.js
  output_ts=$output_dir/${filename%%.*}.d.ts
  if [ $filename = "loginapi.proto" ]
  then
    echo "generate: js=${output_js}|ts=${output_ts}|from=${input_proto}"
    pbjs -p proto -t static-module --force-number -w es6 -o ${output_js}  ${input_proto}
    pbts -o ${output_ts} ${output_js}
  fi
}

recursive_generate_dir() {
  for filename in `ls $1`
  do
      path="$1/$filename"
      if [ -d $path ]
      then
        recursive_generate_dir $path
      else
        generate_pbjs $filename $1
      fi
  done
}

recursive_generate_dir "src/proto"

pbjs -p proto -t static-module --force-number -w es6 -o src/proto/proto.js  src/proto/*.proto
pbts -o src/proto/proto.d.ts src/proto/proto.js