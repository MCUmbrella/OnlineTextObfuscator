const rightToLeft = '\u202E';
const invisibleSpaces = ['\u200B', '\u200C', '\u200D'];

function randInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function obfuscate(str)
{
    if (typeof str !== 'string')
    {
        throw new Error("Parameter is not a string");
    }

    if(str.length == 0)
    {
        return str;
    }

    var obfuscatedStr = rightToLeft;

    for (var i = str.length - 1; i >= 0; i--)
    {
        obfuscatedStr += str[i];
        //console.log(str[i]);
        var numSpaces = randInt(5, 10);

        for (var j = 0; j != numSpaces; j++)
        {
            var randomSpace = invisibleSpaces[randInt(0, invisibleSpaces.length - 1)];
            //console.log(randomSpace);
            obfuscatedStr += randomSpace;
        }
    }

    return obfuscatedStr;
}
