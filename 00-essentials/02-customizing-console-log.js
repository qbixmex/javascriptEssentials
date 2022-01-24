console.log(
    '%c Javascript',
    'color: black; background: yellow; font-size: 30px; padding: 5px 8px;',
);

console.log(
    'Nothing here %cHi Cat %cHey Bear', // Console Message
    'color: skyblue',
    'color: hsl(0, 70%, 60%) ',
);

console.log('%cconsole.log', 'color: white;');
console.info('%cconsole.info', 'color: skyblue;');
console.debug('%cconsole.debug', 'color: green;');
console.warn('%cconsole.warn', 'color: hsl(60, 70%, 50%);');
console.error('%cconsole.error', 'color: hsl(0, 50%, 60%);');

const styles = [
    'color: #fff',
    'background: green',
    'font-size: 30px',
    'border: 2px solid white',
    'text-shadow: 2px 2px 4px black',
    'margin: 10px 0',
    'padding: 10px',
].join(';');

console.log("%cHello Mexico", styles);

const styles2 = [
    'color: hsl(0, 70%, 50%)',
    'background: yellow',
    'font-size: 30px',
    'font-weight: bold',
    'margin: 10px 0',
    'padding: 10px',
    'text-shadow: 2px 2px 5px rgba(0,0,0, .5)',
    'border: 4px solid hsl(0, 70%, 50%)',
].join(';');

const message = 'Warning Message';

// 3. Using the styles and message variable
console.log('%c%s', styles2, message);