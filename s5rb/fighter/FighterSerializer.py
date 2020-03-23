from rest_framework import serializers
from fighter.models import Fighter

class FighterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Fighter
        fields = (
          'id', 'name', 'smash_id', 'preference', 'current_favor', 'champion_rating', 'mario', 'donkey_kong',
          'link', 'samus', 'dark_samus', 'yoshi', 'kirby', 'fox', 'pikachu', 'luigi',
          'ness', 'captain_falcon', 'jigglypuff', 'peach', 'daisy', 'bowser', 'ice_climbers',
          'sheik', 'zelda', 'dr_mario', 'pichu', 'falco', 'marth', 'lucina', 'young_link',
          'ganondorf', 'mewtwo', 'roy', 'chrom', 'mr_game_and_watch', 'meta_knight',
          'pit', 'dark_pit', 'zero_suit_samus', 'wario', 'snake', 'ike', 'pokemon_trainer',
          'diddy_kong', 'lucas', 'sonic', 'king_dedede', 'olimar', 'lucario', 'rob',
          'toon_link', 'wolf', 'villager', 'mega_man', 'wii_fit_trainer', 'rosalina',
          'little_mac', 'greninja', 'palutena', 'pac_man', 'tactician', 'shulk',
          'bowser_jr', 'duck_hunt', 'ryu', 'ken', 'cloud', 'corrin', 'bayonetta',
          'inkling', 'ridley', 'simon', 'richter', 'king_k_rool', 'isabelle', 'incineroar',
          'piranha_plant', 'joker', 'hero', 'banjo_and_kazooie', 'terry', 'byleth', 'mii_brawler', 'mii_swordfighter', 'mii_gunner'
        )

class FighterEditorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fighter
        fields = (
          'id', 'name', 'smash_id', 'preference', 'current_favor', 'champion_rating', 'mario', 'donkey_kong',
          'link', 'samus', 'dark_samus', 'yoshi', 'kirby', 'fox', 'pikachu', 'luigi',
          'ness', 'captain_falcon', 'jigglypuff', 'peach', 'daisy', 'bowser', 'ice_climbers',
          'sheik', 'zelda', 'dr_mario', 'pichu', 'falco', 'marth', 'lucina', 'young_link',
          'ganondorf', 'mewtwo', 'roy', 'chrom', 'mr_game_and_watch', 'meta_knight',
          'pit', 'dark_pit', 'zero_suit_samus', 'wario', 'snake', 'ike', 'pokemon_trainer',
          'diddy_kong', 'lucas', 'sonic', 'king_dedede', 'olimar', 'lucario', 'rob',
          'toon_link', 'wolf', 'villager', 'mega_man', 'wii_fit_trainer', 'rosalina',
          'little_mac', 'greninja', 'palutena', 'pac_man', 'tactician', 'shulk',
          'bowser_jr', 'duck_hunt', 'ryu', 'ken', 'cloud', 'corrin', 'bayonetta',
          'inkling', 'ridley', 'simon', 'richter', 'king_k_rool', 'isabelle', 'incineroar',
          'piranha_plant', 'joker', 'hero', 'byleth', 'banjo_and_kazooie', 'terry', 'mii_brawler', 'mii_swordfighter', 'mii_gunner'
        )
        lookup_field = 'name'
        extra_kwargs = {
            'url': {'lookup_field': 'name'}
        }
