import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: {name: string, url: string, img: string, description: string}[] = [
    {
      name: 'Grafana',
      url: 'https://grafana.acm-mem.com',
      img: '/assets/images/Grafana.png',
      description: 'View the status of the servers running inside the ACM.'
    },
    {
      name: 'Wiki',
      url: 'https://home.acm-mem.com/wiki/projects',
      img: '/assets/images/Wiki.png',
      description: 'User-powered documentation for the services provided by the ACM.'
    },
    {
      name: 'Unifi',
      url: 'https://unifi.acm-mem.com',
      img: '/assets/images/Unifi.gif',
      description: 'Access the Unifi Controller\'s web interface for managing the ACM\'s Unifi APs.'
    },
    {
      name: 'Unraid',
      url: 'https://unraid.acm-mem.com',
      img: '/assets/images/Unraid.png',
      description: 'Access the Unraid web interface.'
    },
    {
      name: 'ESXi',
      url: 'https://esxi.acm-mem.com',
      img: '/assets/images/ESXi.png',
      description: 'Access the ESXi web interface.'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
