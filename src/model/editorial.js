
export default function getEditorial() {
    const editorial = [];

    editorial.push(
        {
            idx: 1,
            heading: "Heading One.",
            textRows: getTextRows(1)
        }
    );

    editorial.push(
        {
            idx: 2,
            heading: "Heading Two.",
            textRows: getTextRows(2)
        }
    );

    editorial.push(
        {
            idx: 3,
            heading: "Heading Three.",
            textRows: getTextRows(3)
        }
    );

    editorial.push(
        {
            idx: 4,
            heading: "Heading Four.",
            textRows: getTextRows(4)
        }
    );

    return editorial;
}


function getTextRows(idx) {
    const dataRows = [];

    switch (idx) {
        case 1:
            break;

        case 2:
            break;

        default:

    }

    return dataRows;
}

function getRow(idx, content) {

    const row = {
        idx: idx,
        content: content
    };

    return row;
}