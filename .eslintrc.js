module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    /**off/0, warn/1, error/2 */
    // 允许无括号的箭头函数
    "arrow-parens": 0,
    // generator 函数中 * 号 和周围有空格
    "generator-star-spacing": 0,
    // 开发环境允许 debugger
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    // 使用两个空格进行缩进
    indent: [2, 2, { SwitchCase: 0 }],
    // 除需要转义的情况外，字符串统一使用单引号
    quotes: [1, "single"],
    // 关键字后面加空格
    "keyword-spacing": [
      2,
      {
        // 要求在关键字之前至少有一个空格
        before: true
      }
    ],
    // 函数声明时括号与函数名间加空格
    "space-before-function-paren": [0, "always"],
    // 始终使用 === 替代 ==
    eqeqeq: 2,
    // 字符串拼接操作符之间要留空格
    "space-infix-ops": [
      2,
      {
        int32Hint: false
      }
    ],
    "no-unused-vars": [2, { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }],
    // 逗号后面加空格
    "comma-spacing": [
      1,
      {
        before: false,
        after: true
      }
    ],
    // else 关键字要与花括号保持在同一行
    "brace-style": 2,
    //  多行 if 语句的的括号不能省
    curly: 2,
    // 使用浏览器全局变量时加上 window. 前缀
    "no-undef": 1,
    // 不允许有连续多行空行。
    "no-multiple-empty-lines": 1,
    //  对于三元运算符 ? 和 : 与他们所负责的代码处于同一行
    "operator-linebreak": [1, "after"],
    // 每个 var 关键字单独声明一个变量
    "one-var": [1, "never"],
    // 条件语句中赋值语句使用括号包起来
    "no-cond-assign": 1,
    // 单行代码块两边加空格
    // "eslint block-spacing": 1,
    // 不允许有多余的行末逗号
    "comma-dangle": 2,
    // 对于变量和函数名统一使用驼峰命名法。
    // camelcase: 1,
    // 始终将逗号置于行末。
    "comma-style": 2,
    // 点号操作符须与属性需在同一行。
    "dot-location": 1,
    // 文件末尾留一空行。
    "eol-last": 0,
    // 函数调用时标识符与括号间不留间隔。
    "func-call-spacing": 2,
    // 键值对当中冒号与值之间要留空白。
    "key-spacing": 2,
    // 构造函数要以大写字母开头。
    "new-cap": 0,
    // 无参的构造函数调用时要带上括号。
    "new-parens": 1,
    // 对象中定义了存值器，一定要对应的定义取值器。
    "accessor-pairs": 2,
    // 子类的构造器中一定要调用
    "constructor-super": 2,
    // 使用数组字面量而不是构造器。
    "no-array-constructor": 1,
    // 避免使用 arguments.callee 和 arguments.caller。
    "no-caller": 2,
    // 避免对类名重新赋值。
    "no-class-assign": 2,
    // 避免修改使用 const 声明的变量。
    "no-const-assign": 2,
    // 避免使用常量作为条件表达式的条件（循环语句除外）
    "no-constant-condition": 1,
    // 正则中不要使用控制符。
    "no-control-regex": 1,
    // 不要对变量使用 delete 操作。
    "no-delete-var": 1,
    // 不要定义重复的函数参数。
    "no-dupe-args": 2,
    // 类中不要定义重复的属性。
    "no-dupe-class-members": 2,
    // 对象字面量中不要定义重复的属性。
    "no-dupe-keys": 2,
    // switch 语句中不要定义重复的 case 分支。
    "no-duplicate-case": 2,
    // 同一模块有多个导入时一次性写完。
    "no-duplicate-imports": 2,
    // 正则中不要使用空字符。
    "no-empty-character-class": 2,
    // 不要解构空值。
    "no-empty-pattern": 2,
    // 不要使用 eval()。
    "no-eval": 1,
    // catch 中不要对错误重新赋值。
    "no-ex-assign": 2,
    // 不要扩展原生对象。
    "no-extend-native": [
      2,
      {
        exceptions: ["Object"]
      }
    ],
    // 避免多余的函数上下文绑定。
    "no-extra-bind": 1,
    // 避免不必要的布尔转换。
    "no-extra-boolean-cast": 1,
    // 不要使用多余的括号包裹函数。
    "no-extra-parens": 1,
    // switch 一定要使用 break 来将条件分支正常中断。
    "no-fallthrough": 2,
    // 不要省去小数点前面的 0。,
    "no-floating-decimal": 0,
    // 避免对声明过的函数重新赋值。
    "no-func-assign": 2,
    // 不要对全局只读对象重新赋值。
    "no-global-assign": 2,
    // 嵌套的代码块中禁止再定义函数。
    "no-inner-declarations": 0,
    // 不要向 RegExp 构造器传入非法的正则表达式。
    "no-invalid-regexp": 2,
    // 不要使用非法的空白符。
    // 禁止使用 __iterator__。
    "no-iterator": 2,
    // 不要使用标签语句。
    "no-labels": 2,
    // 不要混合使用空格与制表符作为缩进。
    "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
    // 除了缩进，不要使用多个空格。
    "no-multi-spaces": 2,
    // 不要使用多行字符串。
    "no-multi-str": 2,
    // 禁止使用 Function 构造器。
    "no-new-func": 2,
    // 禁止使用 Object 构造器。
    "no-new-object": 1,
    // 禁止使用 new require。
    "no-new-require": 2,
    // 禁止使用 Symbol 构造器。
    "no-new-symbol": 1,
    // 禁止使用原始包装器。
    "no-new-wrappers": 1,
    // 不要将全局对象的属性作为函数调用。
    "no-obj-calls": 2,
    // 不要使用八进制字面量。
    "no-octal": 1,
    // 字符串字面量中也不要使用八进制转义字符。
    "no-octal-escape": 2,
    // 使用 __dirname 和 __filename 时尽量避免使用字符串拼接。
    "no-path-concat": 2,
    // 使用 getPrototypeOf 来替代 __proto__。
    "no-proto": 1,
    // 不要重复声明变量。
    "no-redeclare": 2,
    // 正则中避免使用多个空格。
    "no-regex-spaces": 2,
    // return 语句中的赋值必需有括号包裹。
    "no-return-assign": 0,
    // 避免将变量赋值给自己。
    "no-self-assign": 2,
    // 避免将变量与自己进行比较操作。
    "no-self-compare": 2,
    // 避免使用逗号操作符。
    "no-sequences": 2,
    // 不要随意更改关键字的值。
    "no-shadow-restricted-names": 2,
    // 正确使用 ES6 中的字符串模板。
    "no-template-curly-in-string": 1,
    // 使用 this 前请确保 super() 已调用。
    "no-this-before-super": 1,
    //  用 throw 抛错时，抛出 2or 对象而不是字符串。
    "no-throw-literal": 1,
    // 行末不留空格。
    "no-trailing-spaces": 0,
    // 不要使用 undefined 来初始化变量。
    "no-undef-init": 2,
    // return，throw，continue 和 break 后不要再跟代码。
    "no-unreachable": 2,
    // finally 代码块中不要再改变程序执行流程。,
    "no-unsafe-finally": 2,
    // import, export 和解构操作中，禁止赋值到同名变量。
    "no-useless-rename": 1,
    // 代码块首尾留空格。
    "space-before-blocks": [0, "never"],
    // 圆括号间不留空格。
    "space-in-parens": 1,
    // no console
    "no-console": 0
    //禁止嵌套3目运算
    // "no-nested-ternary": 2,
    // 注释首尾留空格。
    // "spaced-comment": [2, "always"],
  }
}
