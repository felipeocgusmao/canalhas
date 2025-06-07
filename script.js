console.log("Clã OS CANALHAS - Conectado");

// Copy to Clipboard functionality for the Clan Tag
const copyButton = document.getElementById('copyButton');

if (copyButton) {
  copyButton.addEventListener('click', () => {
    const clanTag = '#CANALHAS25';
    
    // Use the modern Navigator Clipboard API
    navigator.clipboard.writeText(clanTag).then(() => {
      // Success feedback
      const originalText = copyButton.innerText;
      copyButton.innerText = 'Copiado!';
      copyButton.style.backgroundColor = '#28a745'; // Green color for success
      
      // Revert back after 2 seconds
      setTimeout(() => {
        copyButton.innerText = originalText;
        copyButton.style.backgroundColor = '#f5c518';
      }, 2000);
      
    }).catch(err => {
      // Error feedback
      console.error('Failed to copy: ', err);
      copyButton.innerText = 'Erro ao Copiar';
      
      setTimeout(() => {
        copyButton.innerText = 'Copiar Tag do Clã: #CANALHAS25';
      }, 2000);
    });
  });
}