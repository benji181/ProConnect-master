const CourseDetails = [
  {
    id: 1,
    title: 'HTML Basics',
    description: `This comprehensive course introduces you to HTML, the foundational language for building web pages. 
You will learn about the structure of HTML documents, tags, attributes, and semantic markup. 
Mastering HTML is essential for anyone interested in web development or design. 
The video tutorial and practical exercises below will help you understand these concepts better.`,
    lessons: [
      {
        id: 1,
        content: `Welcome to the HTML Basics lesson. The video and practical exercises below will help you learn more effectively.`,
        videoUrl: 'https://www.youtube.com/embed/pQN-pnXPaVg',
        quiz: {
          questions: [
            {
              question: 'What does HTML stand for?',
              options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language'],
              answer: 'Hyper Text Markup Language',
            },
            {
              question: 'Which tag is used for the largest heading?',
              options: ['<h1>', '<head>', '<header>'],
              answer: '<h1>',
            },
            {
              question: 'Which tag is used to create a hyperlink?',
              options: ['<a>', '<link>', '<href>'],
              answer: '<a>',
            },
            {
              question: 'How do you insert a comment in HTML?',
              options: ['// comment', '<!-- comment -->', '/* comment */'],
              answer: '<!-- comment -->',
            },
            {
              question: 'Which tag is used to define an unordered list?',
              options: ['<ul>', '<ol>', '<li>'],
              answer: '<ul>',
            },
            {
              question: 'What is the correct HTML element for inserting a line break?',
              options: ['<break>', '<br>', '<lb>'],
              answer: '<br>',
            },
            {
              question: 'Which attribute specifies an alternate text for an image?',
              options: ['alt', 'src', 'title'],
              answer: 'alt',
            },
            {
              question: 'How do you create a table row?',
              options: ['<tr>', '<td>', '<table>'],
              answer: '<tr>',
            },
            {
              question: 'Which tag is used to define a paragraph?',
              options: ['<p>', '<para>', '<pg>'],
              answer: '<p>',
            },
            {
              question: 'How to make a numbered list?',
              options: ['<ol>', '<ul>', '<li>'],
              answer: '<ol>',
            },
            {
              question: 'Which tag is used to add an image?',
              options: ['<img>', '<image>', '<pic>'],
              answer: '<img>',
            },
            {
              question: 'What does the "src" attribute in <img> tag specify?',
              options: ['Image source URL', 'Image size', 'Image format'],
              answer: 'Image source URL',
            },
            {
              question: 'Which tag is used to define the document title?',
              options: ['<title>', '<head>', '<meta>'],
              answer: '<title>',
            },
            {
              question: 'How do you create a dropdown list?',
              options: ['<select>', '<input>', '<dropdown>'],
              answer: '<select>',
            },
            {
              question: 'Which tag is used to embed a video?',
              options: ['<video>', '<media>', '<movie>'],
              answer: '<video>',
            },
          ],
        },
      },
    ],
  },

  {
    id: 2,
    title: 'CSS Fundamentals',
    description: `This course covers the basics of CSS, the language used to style HTML elements. 
You will learn about selectors, properties, values, the box model, and responsive design principles. 
Understanding CSS is critical to creating visually appealing and user-friendly websites. 
The video tutorial and practical exercises below will guide you through these concepts.`,
    lessons: [
      {
        id: 1,
        content: `Welcome to the CSS Fundamentals lesson. The video and practical exercises below will help you learn more effectively.`,
        videoUrl: 'https://www.youtube.com/embed/yfoY53QXEnI',
        quiz: {
          questions: [
            {
              question: 'Which property is used to change the text color?',
              options: ['font-color', 'color', 'text-color'],
              answer: 'color',
            },
            {
              question: 'How do you select an element with id "header"?',
              options: ['.header', '#header', 'header'],
              answer: '#header',
            },
            {
              question: 'Which CSS property controls the text size?',
              options: ['font-style', 'font-size', 'text-size'],
              answer: 'font-size',
            },
            {
              question: 'How do you make the background color red?',
              options: ['background-color: red;', 'color: red;', 'bgcolor: red;'],
              answer: 'background-color: red;',
            },
            {
              question: 'Which property is used to change the font?',
              options: ['font-family', 'font-weight', 'font-style'],
              answer: 'font-family',
            },
            {
              question: 'How do you make a list that lists its items with squares?',
              options: ['list-style-type: square;', 'list-style: square;', 'list-type: square;'],
              answer: 'list-style-type: square;',
            },
            {
              question: 'What is the default position value?',
              options: ['static', 'relative', 'absolute'],
              answer: 'static',
            },
            {
              question: 'How do you select all <p> elements inside a <div>?',
              options: ['div p', 'div.p', 'div > p'],
              answer: 'div p',
            },
            {
              question: 'Which property adds space inside the border?',
              options: ['margin', 'padding', 'border-spacing'],
              answer: 'padding',
            },
            {
              question: 'How do you make text bold?',
              options: ['font-weight: bold;', 'text-style: bold;', 'font-style: bold;'],
              answer: 'font-weight: bold;',
            },
            {
              question: 'Which property controls the element\'s transparency?',
              options: ['opacity', 'visibility', 'display'],
              answer: 'opacity',
            },
            {
              question: 'How do you center a block element horizontally?',
              options: ['margin: 0 auto;', 'text-align: center;', 'align: center;'],
              answer: 'margin: 0 auto;',
            },
            {
              question: 'How do you make a font italic?',
              options: ['font-style: italic;', 'font-weight: italic;', 'text-decoration: italic;'],
              answer: 'font-style: italic;',
            },
            {
              question: 'Which property controls the stacking order of elements?',
              options: ['z-index', 'stack-order', 'order'],
              answer: 'z-index',
            },
            {
              question: 'How do you apply a CSS rule to all elements?',
              options: ['* { }', 'all { }', 'every { }'],
              answer: '* { }',
            },
          ],
        },
      },
    ],
  },

  {
    id: 3,
    title: 'JavaScript Essentials',
    description: `This course introduces you to JavaScript, the programming language that makes web pages interactive. 
You will learn about variables, data types, functions, control flow, and events. 
JavaScript is essential for front-end and back-end web development. 
The video tutorial and practical exercises below will help reinforce these concepts.`,
    lessons: [
      {
        id: 1,
        content: `Welcome to the JavaScript Essentials lesson. The video and practical exercises below will help you learn more effectively.`,
        videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk',
        quiz: {
          questions: [
            {
              question: 'Which keyword declares a variable?',
              options: ['var', 'let', 'const', 'All of the above'],
              answer: 'All of the above',
            },
            {
              question: 'How do you write a function in JavaScript?',
              options: ['function myFunc() {}', 'def myFunc() {}', 'func myFunc() {}'],
              answer: 'function myFunc() {}',
            },
            {
              question: 'Which operator is used for strict equality?',
              options: ['==', '===', '='],
              answer: '===',
            },
            {
              question: 'How do you write a comment?',
              options: ['// comment', '<!-- comment -->', '# comment'],
              answer: '// comment',
            },
            {
              question: 'What is the correct way to write an if statement?',
              options: ['if (x > y) {}', 'if x > y {}', 'if x > y then {}'],
              answer: 'if (x > y) {}',
            },
            {
              question: 'Which method converts JSON to an object?',
              options: ['JSON.parse()', 'JSON.stringify()', 'JSON.convert()'],
              answer: 'JSON.parse()',
            },
            {
              question: 'How do you create an array?',
              options: ['[]', '{}', '()'],
              answer: '[]',
            },
            {
              question: 'Which event occurs when the user clicks on an element?',
              options: ['onclick', 'onmouseover', 'onchange'],
              answer: 'onclick',
            },
            {
              question: 'How do you declare a constant?',
              options: ['const x = 5;', 'constant x = 5;', 'let x = 5;'],
              answer: 'const x = 5;',
            },
            {
              question: 'Which method adds an element to the end of an array?',
              options: ['push()', 'pop()', 'shift()'],
              answer: 'push()',
            },
            {
              question: 'How do you write a for loop?',
              options: ['for (let i=0; i<5; i++) {}', 'for i in range(5) {}', 'foreach (i in 5) {}'],
              answer: 'for (let i=0; i<5; i++) {}',
            },
            {
              question: 'What keyword is used to exit a loop?',
              options: ['break', 'exit', 'stop'],
              answer: 'break',
            },
            {
              question: 'Which symbol is used for single-line comments?',
              options: ['//', '/*', '#'],
              answer: '//',
            },
            {
              question: 'How do you convert a string to a number?',
              options: ['Number()', 'parseInt()', 'Both'],
              answer: 'Both',
            },
            {
              question: 'Which object represents the browser window?',
              options: ['window', 'document', 'screen'],
              answer: 'window',
            },
          ],
        },
      },
    ],
  },
  // Courses 1 to 3 as previously defined...

  {
    id: 4,
    title: 'React for Beginners',
    description: `This course introduces React, a popular JavaScript library for building user interfaces. 
You will learn about components, JSX, state, and props to create dynamic web applications. 
The video tutorial and practical exercises below will help you grasp React fundamentals.`,
    lessons: [
      {
        id: 1,
        content: `Welcome to the React for Beginners lesson. The video and practical exercises below will help you learn more effectively.`,
        videoUrl: 'https://www.youtube.com/embed/x4rFhThSX04',
        quiz: {
          questions: [
            { question: 'What does JSX stand for?', options: ['JavaScript XML', 'Java Syntax Extension', 'JavaScript Extension'], answer: 'JavaScript XML' },
            { question: 'Which method is used to update state in a class component?', options: ['setState()', 'updateState()', 'changeState()'], answer: 'setState()' },
            { question: 'What hook is used to manage state in functional components?', options: ['useState', 'useEffect', 'useContext'], answer: 'useState' },
            { question: 'Which attribute is used to pass data to components?', options: ['props', 'state', 'context'], answer: 'props' },
            { question: 'React components must return what?', options: ['JSX', 'HTML', 'CSS'], answer: 'JSX' },
            { question: 'What is the purpose of keys in lists?', options: ['Identify elements uniquely', 'Style elements', 'Add animations'], answer: 'Identify elements uniquely' },
            { question: 'Which hook runs side effects?', options: ['useEffect', 'useState', 'useMemo'], answer: 'useEffect' },
            { question: 'How do you create a React component?', options: ['Function or class', 'Only class', 'Only function'], answer: 'Function or class' },
            { question: 'What does React use to render UI efficiently?', options: ['Virtual DOM', 'Real DOM', 'Shadow DOM'], answer: 'Virtual DOM' },
            { question: 'How do you pass children elements?', options: ['props.children', 'this.children', 'state.children'], answer: 'props.children' },
            { question: 'What is a controlled component?', options: ['Input controlled by React state', 'Input controlled by DOM', 'Input controlled by CSS'], answer: 'Input controlled by React state' },
            { question: 'Which hook is used for context?', options: ['useContext', 'useState', 'useReducer'], answer: 'useContext' },
            { question: 'How do you prevent default event behavior?', options: ['event.preventDefault()', 'event.stopPropagation()', 'event.default()'], answer: 'event.preventDefault()' },
            { question: 'Which lifecycle method runs after component mounts?', options: ['componentDidMount', 'componentWillMount', 'componentDidUpdate'], answer: 'componentDidMount' },
            { question: 'What is the default export in a React file?', options: ['Component', 'Function', 'Variable'], answer: 'Component' },
          ],
        },
      },
    ],
  },

  {
    id: 5,
    title: 'Python Programming',
    description: `Learn Python, a versatile and beginner-friendly programming language used in web development, data science, automation, and more. 
This course covers syntax, data structures, functions, and modules. 
The video tutorial and practical exercises below will enhance your learning experience.`,
    lessons: [
      {
        id: 1,
        content: `Welcome to the Python Programming lesson. The video and practical exercises below will help you learn more effectively.`,
        videoUrl: 'https://www.youtube.com/embed/_uQrJ0TkZlc',
        quiz: {
          questions: [
            { question: 'What symbol is used for comments?', options: ['#', '//', '/* */'], answer: '#' },
            { question: 'How do you define a function?', options: ['def func():', 'function func() {}', 'func def()'], answer: 'def func():' },
            { question: 'Which data type is immutable?', options: ['tuple', 'list', 'dictionary'], answer: 'tuple' },
            { question: 'How do you create a list?', options: ['[]', '{}', '()'], answer: '[]' },
            { question: 'What is the output of print(2 ** 3)?', options: ['6', '8', '9'], answer: '8' },
            { question: 'Which keyword is used for loops?', options: ['for', 'loop', 'iterate'], answer: 'for' },
            { question: 'How do you import a module?', options: ['import module', 'include module', 'require module'], answer: 'import module' },
            { question: 'Which operator is used for equality?', options: ['==', '=', '!='], answer: '==' },
            { question: 'What is a dictionary?', options: ['Key-value pairs', 'List of items', 'Tuple of values'], answer: 'Key-value pairs' },
            { question: 'How do you handle exceptions?', options: ['try-except', 'catch', 'handle'], answer: 'try-except' },
            { question: 'Which method adds an item to a list?', options: ['append()', 'add()', 'insert()'], answer: 'append()' },
            { question: 'How do you start a while loop?', options: ['while condition:', 'loop while', 'do while'], answer: 'while condition:' },
            { question: 'What does len() do?', options: ['Returns length', 'Returns last element', 'Returns list'], answer: 'Returns length' },
            { question: 'Which keyword defines a class?', options: ['class', 'def', 'object'], answer: 'class' },
            { question: 'How do you create a virtual environment?', options: ['python -m venv env', 'virtualenv env', 'create env'], answer: 'python -m venv env' },
          ],
        },
      },
    ],
  },

  {
    id: 6,
    title: 'SQL for Data Management',
    description: `Master SQL to manage and query relational databases efficiently. 
This course covers SELECT statements, filtering, joins, and aggregations. 
The video tutorial and practical exercises below will solidify your SQL skills.`,
    lessons: [
      {
        id: 1,
        content: `Welcome to the SQL for Data Management lesson. The video and practical exercises below will help you learn more effectively.`,
        videoUrl: 'https://www.youtube.com/embed/HXV3zeQKqGY',
        quiz: {
          questions: [
            { question: 'Which command retrieves data?', options: ['SELECT', 'INSERT', 'UPDATE'], answer: 'SELECT' },
            { question: 'How do you filter results?', options: ['WHERE', 'FILTER', 'HAVING'], answer: 'WHERE' },
            { question: 'Which keyword joins tables?', options: ['JOIN', 'CONNECT', 'MERGE'], answer: 'JOIN' },
            { question: 'What does COUNT() do?', options: ['Counts rows', 'Counts columns', 'Counts tables'], answer: 'Counts rows' },
            { question: 'How do you sort results?', options: ['ORDER BY', 'SORT BY', 'GROUP BY'], answer: 'ORDER BY' },
            { question: 'Which clause groups rows?', options: ['GROUP BY', 'ORDER BY', 'HAVING'], answer: 'GROUP BY' },
            { question: 'How do you insert data?', options: ['INSERT INTO', 'ADD TO', 'PUT INTO'], answer: 'INSERT INTO' },
            { question: 'Which command deletes data?', options: ['DELETE', 'REMOVE', 'DROP'], answer: 'DELETE' },
            { question: 'How do you update data?', options: ['UPDATE', 'MODIFY', 'CHANGE'], answer: 'UPDATE' },
            { question: 'What is a primary key?', options: ['Unique identifier', 'Foreign key', 'Index'], answer: 'Unique identifier' },
            { question: 'What does NULL mean?', options: ['No value', 'Zero', 'Empty string'], answer: 'No value' },
            { question: 'Which SQL language is used to define tables?', options: ['DDL', 'DML', 'DCL'], answer: 'DDL' },
            { question: 'What does INNER JOIN do?', options: ['Returns matching rows', 'Returns all rows', 'Returns no rows'], answer: 'Returns matching rows' },
            { question: 'Which clause filters grouped data?', options: ['HAVING', 'WHERE', 'ORDER BY'], answer: 'HAVING' },
            { question: 'How do you limit results?', options: ['LIMIT', 'TOP', 'MAX'], answer: 'LIMIT' },
          ],
        },
      },
    ],
  },

  {
    id: 7,
    title: 'PHP Web Development',
    description: `Learn PHP, a server-side scripting language used to build dynamic websites and applications. 
This course covers syntax, variables, functions, and database interactions. 
The video tutorial and practical exercises below will help you become proficient in PHP.`,
    lessons: [
      {
        id: 1,
        content: `Welcome to the PHP Web Development lesson. The video and practical exercises below will help you learn more effectively.`,
        videoUrl: 'https://www.youtube.com/embed/OK_JCtrrv-c',
        quiz: {
          questions: [
            { question: 'Which symbol is used to start a PHP script?', options: ['<?php', '<script>', '<php>'], answer: '<?php' },
            { question: 'How do you declare a variable?', options: ['$var', 'var', 'let'], answer: '$var' },
            { question: 'Which function outputs text?', options: ['echo', 'print', 'write'], answer: 'echo' },
            { question: 'How do you concatenate strings?', options: ['.', '+', '&'], answer: '.' },
            { question: 'Which superglobal contains form data?', options: ['$_POST', '$_GET', '$_FORM'], answer: '$_POST' },
            { question: 'How do you write a comment?', options: ['// comment', '# comment', 'Both'], answer: 'Both' },
            { question: 'Which function connects to a MySQL database?', options: ['mysqli_connect()', 'mysql_connect()', 'connect_db()'], answer: 'mysqli_connect()' },
            { question: 'How do you start a session?', options: ['session_start()', 'start_session()', 'begin_session()'], answer: 'session_start()' },
            { question: 'Which keyword defines a function?', options: ['function', 'def', 'func'], answer: 'function' },
            { question: 'How do you include a file?', options: ['include', 'import', 'require'], answer: 'include' },
            { question: 'Which operator is used for equality?', options: ['==', '=', '==='], answer: '==' },
            { question: 'How do you create an array?', options: ['array()', '[]', 'Both'], answer: 'Both' },
            { question: 'Which function counts array elements?', options: ['count()', 'length()', 'size()'], answer: 'count()' },
            { question: 'How do you check if a variable is set?', options: ['isset()', 'empty()', 'exists()'], answer: 'isset()' },
            { question: 'Which function sends a header?', options: ['header()', 'send()', 'setHeader()'], answer: 'header()' },
          ],
        },
      },
    ],
  },

  {
    id: 8,
    title: 'jQuery Library',
    description: `Master jQuery, a fast and concise JavaScript library that simplifies HTML document traversal, event handling, and animation. 
This course covers selectors, events, effects, and AJAX. 
The video tutorial and practical exercises below will enhance your jQuery skills.`,
    lessons: [
      {
        id: 1,
        content: `Welcome to the jQuery Library lesson. The video and practical exercises below will help you learn more effectively.`,
        videoUrl: 'https://www.youtube.com/embed/3nr9D8Z5q3A',
        quiz: {
          questions: [
            { question: 'How do you select all <p> elements?', options: ['$("p")', 'document.getElementsByTagName("p")', '#p'], answer: '$("p")' },
            { question: 'Which method hides elements?', options: ['hide()', 'remove()', 'display:none'], answer: 'hide()' },
            { question: 'How do you attach a click event?', options: ['click()', 'onClick()', 'addEventListener()'], answer: 'click()' },
            { question: 'Which method shows elements?', options: ['show()', 'display()', 'visible()'], answer: 'show()' },
            { question: 'How do you get the HTML content?', options: ['html()', 'text()', 'content()'], answer: 'html()' },
            { question: 'Which method adds a class?', options: ['addClass()', 'classAdd()', 'appendClass()'], answer: 'addClass()' },
            { question: 'How do you perform an AJAX GET request?', options: ['$.get()', '$.ajax()', '$.post()'], answer: '$.get()' },
            { question: 'Which method removes elements?', options: ['remove()', 'delete()', 'hide()'], answer: 'remove()' },
            { question: 'How do you toggle visibility?', options: ['toggle()', 'switch()', 'flip()'], answer: 'toggle()' },
            { question: 'Which method animates elements?', options: ['animate()', 'move()', 'transition()'], answer: 'animate()' },
            { question: 'How do you get the value of an input?', options: ['val()', 'value()', 'getValue()'], answer: 'val()' },
            { question: 'Which method binds an event handler?', options: ['on()', 'bind()', 'attach()'], answer: 'on()' },
            { question: 'How do you stop event propagation?', options: ['event.stopPropagation()', 'event.preventDefault()', 'event.stop()'], answer: 'event.stopPropagation()' },
            { question: 'Which method clones elements?', options: ['clone()', 'copy()', 'duplicate()'], answer: 'clone()' },
            { question: 'How do you find children elements?', options: ['children()', 'find()', 'descendants()'], answer: 'children()' },
          ],
        },
      },
    ],
  },

  {
    id: 9,
    title: 'Bootstrap Framework',
    description: `Learn Bootstrap, a popular CSS framework for building responsive and mobile-first websites quickly. 
This course covers grid system, components, utilities, and customization. 
The video tutorial and practical exercises below will help you build beautiful layouts.`,
    lessons: [
      {
        id: 1,
        content: `Welcome to the Bootstrap Framework lesson. The video and practical exercises below will help you learn more effectively.`,
        videoUrl: 'https://www.youtube.com/embed/5GcQtLDGXy8',
        quiz: {
          questions: [
            { question: 'What is Bootstrap primarily used for?', options: ['CSS Framework', 'JavaScript Library', 'Database'], answer: 'CSS Framework' },
            { question: 'Which class creates a container?', options: ['.container', '.box', '.wrapper'], answer: '.container' },
            { question: 'How do you create a row?', options: ['.row', '.column', '.grid'], answer: '.row' },
            { question: 'Which class makes an element responsive?', options: ['.img-fluid', '.responsive', '.img-responsive'], answer: '.img-fluid' },
            { question: 'How do you create a button?', options: ['.btn', '.button', '.btn-primary'], answer: '.btn' },
            { question: 'Which class adds primary color to button?', options: ['.btn-primary', '.btn-main', '.btn-color'], answer: '.btn-primary' },
            { question: 'What grid system does Bootstrap use?', options: ['12-column', '16-column', '8-column'], answer: '12-column' },
            { question: 'Which class hides elements on small screens?', options: ['.d-none .d-sm-block', '.hidden-sm', '.hide-sm'], answer: '.d-none .d-sm-block' },
            { question: 'How do you add spacing?', options: ['.m-3', '.padding-3', '.space-3'], answer: '.m-3' },
            { question: 'Which class styles navigation bars?', options: ['.navbar', '.nav', '.navigation'], answer: '.navbar' },
            { question: 'How do you make a modal?', options: ['.modal', '.popup', '.dialog'], answer: '.modal' },
            { question: 'Which class adds rounded corners?', options: ['.rounded', '.border-radius', '.corner'], answer: '.rounded' },
            { question: 'How do you align text center?', options: ['.text-center', '.align-center', '.center-text'], answer: '.text-center' },
            { question: 'Which class makes tables responsive?', options: ['.table-responsive', '.responsive-table', '.table-fluid'], answer: '.table-responsive' },
            { question: 'How do you add a dropdown?', options: ['.dropdown', '.drop', '.menu'], answer: '.dropdown' },
          ],
        },
      },
    ],
  },

  {
    id: 10,
    title: 'XML Basics',
    description: `Learn XML, a markup language used to store and transport data. 
This course covers XML syntax, elements, attributes, and parsing. 
The video tutorial and practical exercises below will help you understand XML usage.`,
    lessons: [
      {
        id: 1,
        content: `Welcome to the XML Basics lesson. The video and practical exercises below will help you learn more effectively.`,
        videoUrl: 'https://www.youtube.com/embed/0f5h7z8iFqg',
        quiz: {
          questions: [
            { question: 'What does XML stand for?', options: ['eXtensible Markup Language', 'Example Markup Language', 'Extra Markup Language'], answer: 'eXtensible Markup Language' },
            { question: 'Which character starts an XML tag?', options: ['<', '{', '('], answer: '<' },
            { question: 'Is XML case sensitive?', options: ['Yes', 'No', 'Sometimes'], answer: 'Yes' },
            { question: 'How do you declare an XML version?', options: ['<?xml version="1.0"?>', '<xml version="1.0"/>', '<version="1.0"/>'], answer: '<?xml version="1.0"?>' },
            { question: 'What is a root element?', options: ['The top-level element', 'An attribute', 'A comment'], answer: 'The top-level element' },
            { question: 'Can XML elements have attributes?', options: ['Yes', 'No', 'Only in HTML'], answer: 'Yes' },
            { question: 'Which symbol closes a tag?', options: ['>', '/>', '</'], answer: '>' },
            { question: 'Are empty elements allowed?', options: ['Yes', 'No', 'Only in HTML'], answer: 'Yes' },
            { question: 'How do you comment in XML?', options: ['<!-- comment -->', '// comment', '# comment'], answer: '<!-- comment -->' },
            { question: 'Is XML used for data storage?', options: ['Yes', 'No', 'Only for styling'], answer: 'Yes' },
            { question: 'Can XML be validated?', options: ['Yes', 'No', 'Sometimes'], answer: 'Yes' },
            { question: 'What is XSLT?', options: ['XML Stylesheet Language Transformations', 'XML Style Language Template', 'XML Script Language Tool'], answer: 'XML Stylesheet Language Transformations' },
            { question: 'Which is a well-formed XML document?', options: ['Properly nested tags', 'Missing closing tags', 'Incorrect attribute quotes'], answer: 'Properly nested tags' },
            { question: 'What is an XML Schema?', options: ['Defines structure of XML', 'Styles XML', 'Parses XML'], answer: 'Defines structure of XML' },
            { question: 'Can XML be used with databases?', options: ['Yes', 'No', 'Only with JSON'], answer: 'Yes' },
          ],
        },
      },
    ],
  },

  // ... Continue similarly for courses 11 to 30

  {
    id: 11,
    title: 'Web Design Fundamentals',
    description: `This course covers the essentials of web design including layout, color theory, typography, and responsive design. 
You will learn how to create aesthetically pleasing and user-friendly websites. 
The video tutorial and practical exercises below will help you master web design principles.`,
    lessons: [
      {
        id: 1,
        content: `Welcome to the Web Design Fundamentals lesson. The video and practical exercises below will help you learn more effectively.`,
        videoUrl: 'https://www.youtube.com/embed/1Rs2ND1ryYc',
        quiz: {
          questions: [
            { question: 'What is the purpose of white space in design?', options: ['Improve readability', 'Add color', 'Increase content'], answer: 'Improve readability' },
            { question: 'Which color scheme uses colors opposite on the color wheel?', options: ['Complementary', 'Analogous', 'Monochromatic'], answer: 'Complementary' },
            { question: 'What is responsive design?', options: ['Design that adapts to screen size', 'Fixed layout design', 'Print design'], answer: 'Design that adapts to screen size' },
            { question: 'Which font is best for body text?', options: ['Serif', 'Display', 'Script'], answer: 'Serif' },
            { question: 'What does UX stand for?', options: ['User Experience', 'User Extension', 'Universal Exchange'], answer: 'User Experience' },
            { question: 'Which tool is commonly used for prototyping?', options: ['Figma', 'Excel', 'Photoshop'], answer: 'Figma' },
            { question: 'What does “above the fold” mean?', options: ['Visible without scrolling', 'Below the footer', 'Hidden content'], answer: 'Visible without scrolling' },
            { question: 'Which layout uses a grid?', options: ['Grid layout', 'Flexbox', 'Float layout'], answer: 'Grid layout' },
            { question: 'What is the primary goal of accessibility?', options: ['Make content usable by everyone', 'Make content colorful', 'Make content faster'], answer: 'Make content usable by everyone' },
            { question: 'Which HTML tag is used for navigation?', options: ['<nav>', '<menu>', '<navigation>'], answer: '<nav>' },
            { question: 'What is a wireframe?', options: ['Basic layout sketch', 'Final design', 'Color palette'], answer: 'Basic layout sketch' },
            { question: 'Which property controls spacing between letters?', options: ['letter-spacing', 'word-spacing', 'text-indent'], answer: 'letter-spacing' },
            { question: 'What is the golden ratio?', options: ['A design proportion', 'A font size', 'A color code'], answer: 'A design proportion' },
            { question: 'Which principle relates to visual balance?', options: ['Symmetry', 'Contrast', 'Repetition'], answer: 'Symmetry' },
            { question: 'What is a style guide?', options: ['Document with design rules', 'Website map', 'Content plan'], answer: 'Document with design rules' },
          ],
        },
      },
    ],
  },

  {
    id: 12,
    title: 'Data Analysis with Excel',
    description: `This course teaches you how to use Microsoft Excel for data analysis. 
You will learn formulas, pivot tables, charts, and data visualization techniques. 
The video tutorial and practical exercises below will help you analyze data effectively.`,
    lessons: [
      {
        id: 1,
        content: `Welcome to the Data Analysis with Excel lesson. The video and practical exercises below will help you learn more effectively.`,
        videoUrl: 'https://www.youtube.com/embed/9NUjHBNWe9M',
        quiz: {
          questions: [
            { question: 'Which function sums a range?', options: ['SUM()', 'ADD()', 'TOTAL()'], answer: 'SUM()' },
            { question: 'How do you create a pivot table?', options: ['Insert > PivotTable', 'Data > Table', 'View > Pivot'], answer: 'Insert > PivotTable' },
            { question: 'Which chart is best for showing parts of a whole?', options: ['Pie chart', 'Line chart', 'Bar chart'], answer: 'Pie chart' },
            { question: 'What does VLOOKUP do?', options: ['Looks up values vertically', 'Looks up values horizontally', 'Calculates sum'], answer: 'Looks up values vertically' },
            { question: 'How do you freeze panes?', options: ['View > Freeze Panes', 'Data > Freeze', 'Insert > Freeze'], answer: 'View > Freeze Panes' },
            { question: 'Which formula returns the average?', options: ['AVERAGE()', 'MEAN()', 'AVG()'], answer: 'AVERAGE()' },
            { question: 'How do you filter data?', options: ['Data > Filter', 'Insert > Filter', 'View > Filter'], answer: 'Data > Filter' },
            { question: 'What is conditional formatting?', options: ['Format based on conditions', 'Manual formatting', 'Automatic formulas'], answer: 'Format based on conditions' },
            { question: 'Which symbol starts a formula?', options: ['=', '#', '@'], answer: '=' },
            { question: 'How do you remove duplicates?', options: ['Data > Remove Duplicates', 'Edit > Remove', 'Format > Remove'], answer: 'Data > Remove Duplicates' },
            { question: 'What is a cell reference?', options: ['Coordinates of a cell', 'Value of a cell', 'Formula in a cell'], answer: 'Coordinates of a cell' },
            { question: 'Which shortcut copies data?', options: ['Ctrl + C', 'Ctrl + V', 'Ctrl + X'], answer: 'Ctrl + C' },
            { question: 'How do you insert a new sheet?', options: ['+ button', 'Insert > Sheet', 'File > New'], answer: '+ button' },
            { question: 'What does the CONCATENATE function do?', options: ['Joins text', 'Splits text', 'Counts text'], answer: 'Joins text' },
            { question: 'How do you protect a worksheet?', options: ['Review > Protect Sheet', 'Data > Protect', 'View > Protect'], answer: 'Review > Protect Sheet' },
          ],
        },
      },
    ],
  },

  // Project-based courses 13-15 (already shown in previous messages)

  {
    id: 13,
    title: 'Product Management',
    description: `This course covers the essentials of product management including market research, agile methodologies, roadmap planning, and metrics. 
You will work on real-world projects to develop your skills. 
The video tutorial and practical exercises below will guide you through the process.`,
    lessons: [
      {
        id: 1,
        content: `Welcome to the Product Management lesson. The video and practical exercises below will help you learn more effectively.`,
        videoUrl: 'https://www.youtube.com/embed/5nQZ6rI3QwM',
        quiz: {
          questions: [
            { question: 'What is the primary goal of product management?', options: ['Manage product lifecycle', 'Develop code', 'Design graphics'], answer: 'Manage product lifecycle' },
            { question: 'Which methodology emphasizes iterative development?', options: ['Agile', 'Waterfall', 'Lean'], answer: 'Agile' },
            { question: 'What is a product roadmap?', options: ['Plan of product development', 'Marketing plan', 'Sales strategy'], answer: 'Plan of product development' },
            { question: 'What is a user persona?', options: ['Fictional user profile', 'Real customer', 'Marketing term'], answer: 'Fictional user profile' },
            { question: 'Which metric tracks user engagement?', options: ['DAU', 'ROI', 'CPC'], answer: 'DAU' },
            { question: 'What does MVP stand for?', options: ['Minimum Viable Product', 'Most Valuable Product', 'Maximum Value Plan'], answer: 'Minimum Viable Product' },
            { question: 'What is backlog?', options: ['List of tasks', 'Completed tasks', 'Team members'], answer: 'List of tasks' },
            { question: 'Who is responsible for prioritizing features?', options: ['Product Manager', 'Developer', 'Designer'], answer: 'Product Manager' },
            { question: 'What is sprint planning?', options: ['Planning work for a sprint', 'Marketing plan', 'Customer support'], answer: 'Planning work for a sprint' },
            { question: 'Which tool is used for tracking issues?', options: ['Jira', 'Photoshop', 'Excel'], answer: 'Jira' },
            { question: 'What is user story?', options: ['Feature description', 'Bug report', 'Meeting note'], answer: 'Feature description' },
            { question: 'What does ROI stand for?', options: ['Return on Investment', 'Rate of Interest', 'Return on Innovation'], answer: 'Return on Investment' },
            { question: 'What is a stakeholder?', options: ['Person with interest in product', 'Developer', 'Customer'], answer: 'Person with interest in product' },
            { question: 'Which document outlines product requirements?', options: ['PRD', 'BRD', 'MRD'], answer: 'PRD' },
            { question: 'What is user feedback?', options: ['User opinions', 'Bug reports', 'Sales data'], answer: 'User opinions' },
          ],
        },
      },
    ],
  },

  {
    id: 14,
    title: 'Product Design',
    description: `Learn the principles of product design including user research, wireframing, prototyping, and usability testing. 
This course includes practical projects to create user-centered designs. 
The video tutorial and practical exercises below will enhance your design skills.`,
    lessons: [
      {
        id: 1,
        content: `Welcome to the Product Design lesson. The video and practical exercises below will help you learn more effectively.`,
        videoUrl: 'https://www.youtube.com/embed/1Y2x8s3zZ7Y',
        quiz: {
          questions: [
            { question: 'What is user-centered design?', options: ['Design focused on users', 'Design focused on technology', 'Design focused on business'], answer: 'Design focused on users' },
            { question: 'What tool is commonly used for prototyping?', options: ['Figma', 'Excel', 'Word'], answer: 'Figma' },
            { question: 'What is a wireframe?', options: ['Basic layout sketch', 'Final design', 'Color palette'], answer: 'Basic layout sketch' },
            { question: 'What is usability testing?', options: ['Testing with users', 'Automated testing', 'Performance testing'], answer: 'Testing with users' },
            { question: 'Which principle improves readability?', options: ['Contrast', 'Color', 'Animation'], answer: 'Contrast' },
            { question: 'What does UX stand for?', options: ['User Experience', 'User Extension', 'Universal Exchange'], answer: 'User Experience' },
            { question: 'What is an MVP in design?', options: ['Minimum Viable Product', 'Maximum Value Product', 'Most Valuable Plan'], answer: 'Minimum Viable Product' },
            { question: 'Which file format is vector-based?', options: ['SVG', 'JPEG', 'PNG'], answer: 'SVG' },
            { question: 'What is a persona?', options: ['User profile', 'Developer', 'Manager'], answer: 'User profile' },
            { question: 'What is the goal of prototyping?', options: ['Test design ideas', 'Write code', 'Create marketing'], answer: 'Test design ideas' },
            { question: 'Which method gathers user feedback?', options: ['Surveys', 'Coding', 'Budgeting'], answer: 'Surveys' },
            { question: 'What does UI stand for?', options: ['User Interface', 'User Interaction', 'Universal Input'], answer: 'User Interface' },
            { question: 'What is a style guide?', options: ['Design rules document', 'Code repository', 'Project plan'], answer: 'Design rules document' },
            { question: 'Which color model is used for screens?', options: ['RGB', 'CMYK', 'Pantone'], answer: 'RGB' },
            { question: 'What is accessibility?', options: ['Design for all users', 'Design for developers', 'Design for managers'], answer: 'Design for all users' },
          ],
        },
      },
    ],
  },

  {
    id: 15,
    title: 'YouTube Video Creation',
    description: `This course teaches you how to create engaging YouTube videos from planning, filming, editing, to publishing. 
You will learn content strategy, equipment setup, and SEO optimization. 
The video tutorial and practical exercises below will help you grow your channel.`,
    lessons: [
      {
        id: 1,
        content: `Welcome to the YouTube Video Creation lesson. The video and practical exercises below will help you learn more effectively.`,
        videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4',
        quiz: {
          questions: [
            { question: 'What is the first step in video creation?', options: ['Planning', 'Filming', 'Editing'], answer: 'Planning' },
            { question: 'Which equipment is essential for good audio?', options: ['Microphone', 'Camera', 'Tripod'], answer: 'Microphone' },
            { question: 'What does SEO stand for?', options: ['Search Engine Optimization', 'Social Engagement Output', 'Search Entry Order'], answer: 'Search Engine Optimization' },
            { question: 'Which format is best for YouTube videos?', options: ['MP4', 'AVI', 'MOV'], answer: 'MP4' },
            { question: 'What is a storyboard?', options: ['Visual plan of video', 'Script', 'Editing software'], answer: 'Visual plan of video' },
            { question: 'How long should YouTube videos ideally be?', options: ['8-12 minutes', '30 minutes', '1 hour'], answer: '8-12 minutes' },
            { question: 'Which software is popular for editing?', options: ['Adobe Premiere', 'Notepad', 'Excel'], answer: 'Adobe Premiere' },
            { question: 'What is a thumbnail?', options: ['Video preview image', 'Video title', 'Video description'], answer: 'Video preview image' },
            { question: 'How often should you upload?', options: ['Consistently', 'Once a year', 'Randomly'], answer: 'Consistently' },
            { question: 'What is audience retention?', options: ['How long viewers watch', 'Number of views', 'Subscribers count'], answer: 'How long viewers watch' },
            { question: 'Which metric shows channel popularity?', options: ['Subscribers', 'Likes', 'Comments'], answer: 'Subscribers' },
            { question: 'What is a call to action?', options: ['Request to viewers', 'Video title', 'Thumbnail'], answer: 'Request to viewers' },
            { question: 'What is copyright strike?', options: ['Violation of copyright', 'Video views', 'Subscriber count'], answer: 'Violation of copyright' },
            { question: 'Which platform helps with video SEO?', options: ['TubeBuddy', 'Photoshop', 'Excel'], answer: 'TubeBuddy' },
            { question: 'What is monetization?', options: ['Earning money from videos', 'Editing videos', 'Uploading videos'], answer: 'Earning money from videos' },
          ],
        },
      },
    ],
  },

  {
    id: 16,
    title: 'Advanced JavaScript',
    description: `Deepen your JavaScript knowledge with advanced concepts such as closures, prototypes, async programming, and ES6 features. 
This course includes detailed explanations and practical exercises to enhance your skills.`,
    lessons: [
      {
        id: 1,
        content: `Welcome to the Advanced JavaScript lesson. The video and practical exercises below will help you learn more effectively.`,
        videoUrl: 'https://www.youtube.com/embed/PoRJizFvM7s',
        quiz: {
          questions: [
            { question: 'What is a closure?', options: ['Function with access to outer scope', 'Variable', 'Object'], answer: 'Function with access to outer scope' },
            { question: 'Which keyword creates a block-scoped variable?', options: ['let', 'var', 'const'], answer: 'let' },
            { question: 'What does async/await do?', options: ['Handle asynchronous code', 'Create variables', 'Define functions'], answer: 'Handle asynchronous code' },
            { question: 'What is a promise?', options: ['Object representing future value', 'Function', 'Variable'], answer: 'Object representing future value' },
            { question: 'Which method merges arrays?', options: ['concat()', 'merge()', 'combine()'], answer: 'concat()' },
            { question: 'What is the spread operator?', options: ['...', '++', '--'], answer: '...' },
            { question: 'How do you create a class?', options: ['class MyClass {}', 'function MyClass() {}', 'object MyClass {}'], answer: 'class MyClass {}' },
            { question: 'What is prototype inheritance?', options: ['Objects inherit from prototypes', 'Classes inherit from objects', 'Functions inherit from variables'], answer: 'Objects inherit from prototypes' },
            { question: 'Which method converts JSON to object?', options: ['JSON.parse()', 'JSON.stringify()', 'JSON.convert()'], answer: 'JSON.parse()' },
            { question: 'What does "use strict" do?', options: ['Enforces stricter parsing', 'Enables debugging', 'Disables errors'], answer: 'Enforces stricter parsing' },
            { question: 'Which operator checks type and value?', options: ['===', '==', '='], answer: '===' },
            { question: 'What is event bubbling?', options: ['Event propagates up the DOM', 'Event stops immediately', 'Event propagates down'], answer: 'Event propagates up the DOM' },
            { question: 'Which method adds an element to the beginning of an array?', options: ['unshift()', 'push()', 'pop()'], answer: 'unshift()' },
            { question: 'What is a generator function?', options: ['Function that can pause and resume', 'Regular function', 'Arrow function'], answer: 'Function that can pause and resume' },
            { question: 'How do you import a module?', options: ['import', 'require', 'include'], answer: 'import' },
          ],
        },
      },
    ],
  },

  // ... continue similarly for courses 17 to 30
];

  // ... Repeat similar structure for courses 4 to 30

export default CourseDetails ;