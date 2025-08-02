(module
  ;; 加算関数をエクスポート
  (func $add (param $a i32) (param $b i32) (result i32)
    local.get $a
    local.get $b
    i32.add
  )
  
  ;; 乗算関数をエクスポート
  (func $multiply (param $a i32) (param $b i32) (result i32)
    local.get $a
    local.get $b
    i32.mul
  )
  
  ;; フィボナッチ数列を計算する関数
  (func $fibonacci (param $n i32) (result i32)
    (local $a i32)
    (local $b i32)
    (local $temp i32)
    (local $i i32)
    
    ;; n が 0 または 1 の場合はそのまま返す
    local.get $n
    i32.const 2
    i32.lt_s
    if (result i32)
      local.get $n
      return
    end
    
    ;; 初期値設定
    i32.const 0
    local.set $a
    i32.const 1
    local.set $b
    i32.const 2
    local.set $i
    
    ;; ループでフィボナッチ数列を計算
    loop $fib_loop
      local.get $a
      local.get $b
      i32.add
      local.set $temp
      
      local.get $b
      local.set $a
      local.get $temp
      local.set $b
      
      local.get $i
      i32.const 1
      i32.add
      local.set $i
      
      local.get $i
      local.get $n
      i32.le_s
      br_if $fib_loop
    end
    
    local.get $b
  )
  
  ;; 関数をエクスポート
  (export "add" (func $add))
  (export "multiply" (func $multiply))
  (export "fibonacci" (func $fibonacci))
)
