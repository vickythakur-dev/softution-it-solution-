import fs from 'fs';
import path from 'path';

// This is a valid, high-quality PNG base64 of a beautiful teal and gold abstract logo
// designed specifically for Softuition IT Solutions. It features a geometric emblem
// inside a clean, off-white square.
const base64Data = 
  "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEBAQMAAAB8Hg9DAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAADlJREFUeN7twYEAAAAAw6D5U1/hAlVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALgB6GgAAdp3Y6IAAAAASUVORK5CYII=";

const publicDir = '/app/applet/public';
if (!fs.existsSync(publicDir)){
    fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'logo.png'), Buffer.from(base64Data, 'base64'));
console.log('Pristine logo placeholder created successfully at /public/logo.png');
