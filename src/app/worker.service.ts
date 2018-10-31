import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  worker: any;
  constructor() { 
    this.init();
  }

    init() {
        this.worker = new window['SharedWorker']('./worker.js');
        /*this.worker.onmessage(message , () => {
            console.log(message);
        })*/

        this.worker.port.start('a1');

        this.worker.port.onmessage = function (e) {
            if(e.data.type === 'response'){
                console.log('Simplex App said: ', e.data.result);
            }
        };

    }

    sendRequest(apiCall,args) {
        const message = {
            type: "request",
            apiCall,
            args
        }
        this.worker.port.postMessage(message);
    }

}
