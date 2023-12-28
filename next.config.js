/** @type {import('next').NextConfig} */
import dns from 'node:dns';
const nextConfig = () => {  dns.setDefaultResultOrder('ipv4first'); }


module.exports = nextConfig
