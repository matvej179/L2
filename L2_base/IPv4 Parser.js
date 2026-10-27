function ipv4Parser(ip, mask){
  let ipOctets = ip.split('.');
  let subnetOctets = mask.split('.');

  let networkBlock = [];
  let hostIdentifier = [];

  for (let i = 0; i < 4; i++) {
    networkBlock.push(ipOctets[i] & subnetOctets[i]);

    hostIdentifier.push(ipOctets[i] & (~subnetOctets[i] & 255));
  }

  return [networkBlock.join('.'), hostIdentifier.join('.')];
}