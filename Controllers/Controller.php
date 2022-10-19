<?php

    namespace App\Controllers;

    abstract class Controller
    {
        protected $template = 'default';

        public function render(string $file, array $donnees = [], string $template = 'default')
        {
            // EXTRACTION DONNEES
            extract($donnees);
            // BUFFER SORTIE
            ob_start();
            // CONSERVATION MEMOIRE A PARTIR DE CE POINT
        
            // CHEMIN VIEWS
            require_once ROOT.'/Views/'.$file.'.php';

            // TRANSFERE BUFFER -> CONTENT
            $content = ob_get_clean();

            // TEMPLATE PAGE
            require_once ROOT.'/Views/'.$template.'.php';

        }
    }

?>