import XMLHttpRequest from 'xmlhttprequest';

export default class FileReader {
    public readInFile(path: string): string {
        let request: XMLHttpRequest = new XMLHttpRequest();
        request.open("GET", path, false);

        request.onreadystatechange = function () {
            if(request.readyState === 4 && (request.status === 200 || request.status == 0)) {
                return request.responseText;
            }
        }

        return undefined;
    }
}