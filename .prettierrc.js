module.exports = {
  /**
   * 每行的最大长度
   * https://prettier.io/docs/en/options.html#print-width
   */
  printWidth: 120,

  /**
   * 使用的缩进空格数
   * https://prettier.io/docs/en/options.html#tab-width
   */
  tabWidth: 2,

  /**
   * 使用制表符缩进而不是空格
   * https://prettier.io/docs/en/options.html#tabs
   */
  useTabs: false,

  /**
   * 在语句末尾添加分号
   * https://prettier.io/docs/en/options.html#semicolons
   */
  semi: false,

  /**
   * 使用单引号而不是双引号
   * https://prettier.io/docs/en/options.html#quotes
   */
  singleQuote: true,

  /**
   * 更改对象属性中引号的使用
   * https://prettier.io/docs/en/options.html#quote-props
   */
  quoteProps: 'as-needed',

  /**
   * 在JSX中使用单引号而不是双引号
   * https://prettier.io/docs/en/options.html#jsx-quotes
   */
  jsxSingleQuote: true,

  /**
   * 多行时尽可能打印尾随逗号
   * https://prettier.io/docs/en/options.html#trailing-commas
   */
  trailingComma: 'none',

  /**
   * 在对象文字中的括号之间打印空格
   * https://prettier.io/docs/en/options.html#bracket-spacing
   */
  bracketSpacing: true,

  /**
   * 将多行HTML（HTML、JSX、Vue、Angular）元素的>放在最后一行的末尾，而不是单独放在下一行
   * https://prettier.io/docs/en/options.html#bracket-line
   */
  bracketSameLine: false,

  /**
   * 包含单个箭头函数参数的圆括号
   * https://prettier.io/docs/en/options.html#arrow-function-parentheses
   */
  arrowParens: 'always',

  /**
   * 仅格式化包含特殊注释的文件
   * https://prettier.io/docs/en/options.html#require-pragma
   */
  requirePragma: false,

  /**
   * 在文件顶部插入特殊的@format标记
   * https://prettier.io/docs/en/options.html#insert-pragma
   */
  insertPragma: false,

  /**
   * Markdown文本的换行
   * https://prettier.io/docs/en/options.html#prose-wrap
   */
  proseWrap: 'preserve',

  /**
   * HTML、Vue、Angular和Handlebars的全局空白敏感度
   * https://prettier.io/docs/en/options.html#html-whitespace-sensitivity
   */
  htmlWhitespaceSensitivity: 'css',

  /**
   * 是否缩进Vue文件中的<script>和<style>标签
   * https://prettier.io/docs/en/options.html#vue-files-script-and-style-tags-indentation
   */
  vueIndentScriptAndStyle: false,

  /**
   * 行尾字符
   * https://prettier.io/docs/en/options.html#end-of-line
   */
  endOfLine: 'lf',

  /**
   * 控制是否格式化嵌入的代码
   * https://prettier.io/docs/en/options.html#embedded-language-formatting
   */
  embeddedLanguageFormatting: 'auto',

  /**
   * HTML、Vue和JSX中每行单个属性
   * https://prettier.io/docs/en/options.html#single-attribute-per-line
   */
  singleAttributePerLine: true,

  /**
   * 尝试prettier的新三元运算符格式化
   * https://prettier.io/docs/en/options.html#experimental-ternaries
   */
  experimentalTernaries: false
}
