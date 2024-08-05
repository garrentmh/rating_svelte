<script>
  import { FeedbackStore } from "../stores";
  export let count;
  export let average;

  $: count = $FeedbackStore.length;
  $: average =
    $FeedbackStore.reduce((a, { rating }) => a + rating, 0) / $FeedbackStore.length;
</script>

<div class="feedback-stats">
  <h4>{count} Reviews</h4>
  <h4>Ratings Average: {average}</h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px;
    background-color: #202142;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    font-weight: bold;
    color: #fff;
  }
</style>
