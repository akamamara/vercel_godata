<script context="module">
  import OrgDatabaseBanner from "$lib/components/organism/database/OrgDatabaseBanner.svelte";
  import OrgDatabaseList from "$lib/components/organism/database/OrgDatabaseList.svelte";
</script>

<svelte:head>
	<title>Database | GO DATA</title>
	<meta name="description" content="Database GO Data Risbang BEM KM IPB" />
</svelte:head>

<section name="hero-banner" class="main-container">
  <OrgDatabaseBanner />
</section>
<OrgDatabaseList />
