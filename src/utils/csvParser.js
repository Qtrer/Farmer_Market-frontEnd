import Papa from "papaparse";

export function parseCSV(csvContent) {
    return new Promise((resolve, reject) => {
        Papa.parse(csvContent, {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            complete: (results) => {
                resolve(results.data);
            },
            error: (err) => {
                reject(err);
            },
        });
    });
}
