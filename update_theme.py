import os
import re

target_dir = '/home/sameer/lumina/src/pages'

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
        
    # Major structural backgrounds
    content = content.replace('bg-[#020617]', 'bg-white')
    content = content.replace('bg-[#090f20]/50', 'bg-slate-50')
    
    # Borders
    content = content.replace('border-white/5', 'border-slate-200')
    content = content.replace('border-white/10', 'border-slate-300')
    
    # Common text colors in typical text blocks (excluding buttons which might need white text)
    # Using regex to target text classes that are usually dark mode body/heading text
    content = re.sub(r'text-slate-300', 'text-slate-600', content)
    content = re.sub(r'text-slate-350', 'text-slate-600', content)
    content = re.sub(r'text-slate-400', 'text-slate-500', content)
    content = re.sub(r'text-slate-450', 'text-slate-500', content)
    
    # Targeting the main headings that are text-white, but ignoring buttons 
    # (heuristically, headings are often text-3xl, 4xl, etc., or we replace text-white but exclude certain patterns)
    # It's safer to leave text-white alone except where explicitly replacing.
    # Actually, we can replace text-white with text-slate-900 if it's not inside a button or gradient background.
    # But for a simpler approach, let's just do a blanket replace and fix the buttons later if needed.
    # A safer replace for headings: class="font-display font-black ... text-white" -> text-slate-900
    content = re.sub(r'(font-display[^"<{>]*?)text-white', r'\1text-slate-900', content)
    
    # Fix the card backgrounds
    content = content.replace('from-blue-950/80 to-[#0f172a]', 'from-blue-50 to-slate-100')
    content = content.replace('bg-slate-900', 'bg-slate-100')
    content = content.replace('bg-white/5', 'bg-slate-100')
    
    with open(filepath, 'w') as f:
        f.write(content)

for filename in os.listdir(target_dir):
    if filename.endswith('.tsx'):
        process_file(os.path.join(target_dir, filename))
