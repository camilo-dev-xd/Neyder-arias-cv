#!/usr/bin/env python3
"""
Servidor HTTP simple para el portafolio
Ejecutar: python3 servidor.py
Luego abre http://localhost:8000 en tu navegador
"""

import http.server
import socketserver
import webbrowser
import os

PORT = 8000
DIRECTORIO = os.path.dirname(os.path.abspath(__file__))

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        print(f"[{self.log_date_time_string()}] {format % args}")

os.chdir(DIRECTORIO)

with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
    print(f"✅ Servidor iniciado en http://localhost:{PORT}")
    print(f"📂 Sirviendo desde: {DIRECTORIO}")
    print(f"❌ Presiona Ctrl+C para detener el servidor")
    
    try:
        # Abrir navegador automáticamente
        webbrowser.open(f"http://localhost:{PORT}")
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n✋ Servidor detenido.")
