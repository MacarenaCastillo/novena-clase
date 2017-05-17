<?php include('header.php');?>

<?php
$data = array_map('str_getcsv', file('data/pokemontype.csv'));
array_walk($data, function(&$a) use ($data) {$a = array_combine($data[0], $a);});
array_shift($data);
?>
  <?php $allpoke = count($data);
  $psypoke = array_count_values(array_column($data, 'type_id')); $grasspoke = 0; $waterpoke = 0;?>

Requiere calculos

<div class="inner cover">
<h2 class="cover-heading">Por porcentaje</h2>
<p class="lead"> <?php echo round(($psypoke*100/$allpoke),2);?> % de los <?php echo $allpoke;?> Pokemon son de tipo Psychic</p>
<p class="lead"> Para comparacion, <?php echo round(($grasspoke*100/$allpoke),2);?>% Pokemon son de tipo Grass y <?php echo round(($waterpoke*100/$allpoke),2);?>% son tipo Water.</p>

<?php print_r($data);?>
</div>
<?php include('footer.php');?>
