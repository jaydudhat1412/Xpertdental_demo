const fs = require('fs');
let code = fs.readFileSync('src/pages/Services.tsx', 'utf-8');

// Replace containerVariants and itemVariants usages
code = code.replace(
  /const containerVariants = {[\s\S]*?};\s*const itemVariants = {[\s\S]*?};/,
  ''
);

code = code.replace(
  /<motion\.div\s*key="content"\s*variants=\{containerVariants\}\s*initial="hidden"\s*animate="visible"\s*className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"\s*>/,
  `<motion.div 
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >`
);

code = code.replace(
  /<motion\.div variants=\{itemVariants\} key=\{service\.id\}>/g,
  `<motion.div 
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
                >`
);

code = code.replace(
  /\{services\.map\(\(service\) => \(/g,
  `{services.map((service, index) => (`
);

fs.writeFileSync('src/pages/Services.tsx', code);
