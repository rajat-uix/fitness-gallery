/**
 * PulseFit - Modern Fitness Gallery
 * Interactive client-side application logic
 */

// --- Initial Default Fitness Items Dataset ---
const DEFAULT_FITNESS_ITEMS = [
  {
    id: "fit-1",
    title: "Heavy Barbell Deadlift",
    category: "Strength",
    difficulty: "Advanced",
    duration: "60 mins",
    calories: "520 kcal",
    equipment: "Olympic Barbell & Bumper Plates",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
    description: "Focusing on posterior chain power, proper hip hinge mechanics, and spinal neutrality for maximum compound pulling strength.",
    tags: ["deadlift", "powerlifting", "posteriorchain", "strength"]
  },
  {
    id: "fit-2",
    title: "Sunrise Mountain Trail Run",
    category: "Cardio",
    difficulty: "Intermediate",
    duration: "45 mins",
    calories: "480 kcal",
    equipment: "Trail Running Shoes & Hydration Pack",
    imageUrl: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1000&q=80",
    description: "High cadence outdoor endurance run along rolling elevation. Excellent for building cardiovascular stamina and mental resilience.",
    tags: ["trailrun", "cardio", "endurance", "nature"]
  },
  {
    id: "fit-3",
    title: "Vinyasa Flow & Hip Opener",
    category: "Yoga",
    difficulty: "Beginner",
    duration: "40 mins",
    calories: "210 kcal",
    equipment: "Yoga Mat & Foam Blocks",
    imageUrl: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1000&q=80",
    description: "A calming mobility flow synchronizing breath with movement to release tightness in hip flexors, hamstrings, and lower back.",
    tags: ["yoga", "mobility", "flexibility", "mindfulness"]
  },
  {
    id: "fit-4",
    title: "Explosive Kettlebell HIIT",
    category: "HIIT",
    difficulty: "Intermediate",
    duration: "30 mins",
    calories: "390 kcal",
    equipment: "Competition Kettlebells (16-24kg)",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
    description: "Metabolic conditioning circuits combining Russian swings, clean-and-press, and goblet squats with minimal rest intervals.",
    tags: ["hiit", "kettlebell", "fatburn", "conditioning"]
  },
  {
    id: "fit-5",
    title: "Heavy Bag Striking & Footwork",
    category: "Combat",
    difficulty: "Advanced",
    duration: "45 mins",
    calories: "510 kcal",
    equipment: "Boxing Gloves & Hand Wraps",
    imageUrl: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1000&q=80",
    description: "Sharpening jab-cross combinations, slip counters, and rotational power while keeping a high sustained heart rate.",
    tags: ["boxing", "combat", "agility", "speed"]
  },
  {
    id: "fit-6",
    title: "Incline Dumbbell Chest Press",
    category: "Strength",
    difficulty: "Intermediate",
    duration: "50 mins",
    calories: "430 kcal",
    equipment: "Adjustable Bench & Dumbbells",
    imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80",
    description: "Targeting upper pectorals and anterior deltoids with controlled tempo, full stretch at the bottom, and explosive lockouts.",
    tags: ["hypertrophy", "chestday", "dumbbells", "push"]
  },
  {
    id: "fit-7",
    title: "Endurance Wave Battle Ropes",
    category: "HIIT",
    difficulty: "Advanced",
    duration: "25 mins",
    calories: "340 kcal",
    equipment: "50ft Conditioning Battle Ropes",
    imageUrl: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1000&q=80",
    description: "Tabata style alternating waves and double slams to ignite shoulder burn, grip strength, and anaerobic threshold.",
    tags: ["battleropes", "tabata", "shoulders", "grip"]
  },
  {
    id: "fit-8",
    title: "Macro-Balanced Clean Fuel Bowl",
    category: "Nutrition",
    difficulty: "Beginner",
    duration: "15 mins prep",
    calories: "560 kcal",
    equipment: "Kitchen Prep",
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=80",
    description: "Nutrient-dense post-workout recovery bowl featuring quinoa, roasted sweet potatoes, avocado, and wild greens.",
    tags: ["nutrition", "mealprep", "macros", "recovery"]
  },
  {
    id: "fit-9",
    title: "Strict Calisthenics Pull-Ups",
    category: "Strength",
    difficulty: "Advanced",
    duration: "40 mins",
    calories: "360 kcal",
    equipment: "Pull-Up Bar & Chalk",
    imageUrl: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=1000&q=80",
    description: "Full dead-hang pull-ups focusing on lat engagement, scapular depression, and hollow body abdominal tension.",
    tags: ["calisthenics", "bodyweight", "pullups", "lats"]
  },
  {
    id: "fit-10",
    title: "Indoor High-Cadence Spin",
    category: "Cardio",
    difficulty: "Intermediate",
    duration: "50 mins",
    calories: "550 kcal",
    equipment: "Stationary Spin Bike",
    imageUrl: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=1000&q=80",
    description: "Rhythm-based sprint intervals with standing climbs to build leg drive, quad power, and cardiovascular endurance.",
    tags: ["cycling", "spinning", "intervals", "legpower"]
  },
  {
    id: "fit-11",
    title: "Deep Spinal & Hamstring Stretch",
    category: "Yoga",
    difficulty: "Beginner",
    duration: "30 mins",
    calories: "140 kcal",
    equipment: "Stretch Band & Mat",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80",
    description: "Gentle restorative session focused on lengthening tight hamstrings, decompressing the spine, and improving posture.",
    tags: ["restoration", "stretching", "recovery", "posture"]
  },
  {
    id: "fit-12",
    title: "Track Sprint Speed Work",
    category: "Cardio",
    difficulty: "Advanced",
    duration: "35 mins",
    calories: "410 kcal",
    equipment: "Running Track & Spikes",
    imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1000&q=80",
    description: "100m and 200m acceleration repeats with active recovery walks to develop fast-twitch muscle fibers and sprint mechanics.",
    tags: ["sprints", "speed", "athletics", "track"]
  }
];

// --- State Management ---
class FitnessGalleryApp {
  constructor() {
    this.storageKeyItems = 'pulsefit_items_v1';
    this.storageKeyFavs = 'pulsefit_favorites_v1';
    this.storageKeyTheme = 'pulsefit_theme_v1';

    this.items = this.loadItems();
    this.favorites = this.loadFavorites();
    this.activeCategory = 'all';
    this.searchQuery = '';
    this.filteredItems = [];
    this.currentLightboxItemIndex = -1;

    // DOM Elements
    this.galleryGrid = document.getElementById('galleryGrid');
    this.emptyState = document.getElementById('emptyState');
    this.searchInput = document.getElementById('searchInput');
    this.clearSearchBtn = document.getElementById('clearSearchBtn');
    this.categoryTabs = document.querySelectorAll('.category-tab');
    this.favoritesFilterBtn = document.getElementById('favoritesFilterBtn');
    this.favCountBadge = document.getElementById('favCountBadge');
    this.totalItemsCount = document.getElementById('totalItemsCount');
    this.totalLikedCount = document.getElementById('totalLikedCount');
    this.resetFiltersBtn = document.getElementById('resetFiltersBtn');
    
    // Theme & Views
    this.themeToggleBtn = document.getElementById('themeToggleBtn');
    this.viewGridBtn = document.getElementById('viewGridBtn');
    this.viewCompactBtn = document.getElementById('viewCompactBtn');

    // Lightbox Elements
    this.lightboxModal = document.getElementById('lightboxModal');
    this.lightboxImg = document.getElementById('lightboxImg');
    this.lightboxTitle = document.getElementById('lightboxTitle');
    this.lightboxSubtitle = document.getElementById('lightboxSubtitle');
    this.lightboxDescription = document.getElementById('lightboxDescription');
    this.lightboxCategory = document.getElementById('lightboxCategory');
    this.lightboxDuration = document.getElementById('lightboxDuration');
    this.lightboxCalories = document.getElementById('lightboxCalories');
    this.lightboxDifficulty = document.getElementById('lightboxDifficulty');
    this.lightboxEquipment = document.getElementById('lightboxEquipment');
    this.lightboxTags = document.getElementById('lightboxTags');
    this.lightboxLikeBtn = document.getElementById('lightboxLikeBtn');
    this.lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
    this.lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
    this.lightboxNextBtn = document.getElementById('lightboxNextBtn');
    this.downloadOrShareBtn = document.getElementById('downloadOrShareBtn');

    // Upload Elements
    this.openUploadBtn = document.getElementById('openUploadBtn');
    this.uploadModal = document.getElementById('uploadModal');
    this.uploadModalCloseBtn = document.getElementById('uploadModalCloseBtn');
    this.cancelUploadBtn = document.getElementById('cancelUploadBtn');
    this.addPhotoForm = document.getElementById('addPhotoForm');
    this.toastNotification = document.getElementById('toastNotification');

    this.init();
  }

  // --- Initialization ---
  init() {
    this.initTheme();
    this.setupEventListeners();
    this.updateMetrics();
    this.renderGallery();

    // Auto set footer year
    const yearElem = document.getElementById('currentYear');
    if (yearElem) {
      yearElem.textContent = new Date().getFullYear();
    }
  }

  // --- LocalStorage Helpers ---
  loadItems() {
    try {
      const stored = localStorage.getItem(this.storageKeyItems);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to load items from storage:', e);
    }
    return [...DEFAULT_FITNESS_ITEMS];
  }

  saveItems() {
    try {
      localStorage.setItem(this.storageKeyItems, JSON.stringify(this.items));
    } catch (e) {
      console.error('Failed to save items to storage:', e);
    }
  }

  loadFavorites() {
    try {
      const stored = localStorage.getItem(this.storageKeyFavs);
      if (stored) {
        return new Set(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load favorites:', e);
    }
    // Default 2 liked items for showcase
    return new Set(['fit-1', 'fit-4']);
  }

  saveFavorites() {
    try {
      localStorage.setItem(this.storageKeyFavs, JSON.stringify(Array.from(this.favorites)));
    } catch (e) {
      console.error('Failed to save favorites:', e);
    }
  }

  // --- Theme Management ---
  initTheme() {
    const savedTheme = localStorage.getItem(this.storageKeyTheme) || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    this.updateThemeIcon(savedTheme);
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem(this.storageKeyTheme, newTheme);
    this.updateThemeIcon(newTheme);
    this.showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} mode`);
  }

  updateThemeIcon(theme) {
    const iconSpan = this.themeToggleBtn.querySelector('.theme-icon');
    if (iconSpan) {
      iconSpan.textContent = theme === 'dark' ? '🌙' : '☀️';
    }
  }

  // --- Event Listeners Setup ---
  setupEventListeners() {
    // Theme toggle
    this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());

    // Search input
    this.searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.trim().toLowerCase();
      this.clearSearchBtn.style.display = this.searchQuery ? 'block' : 'none';
      this.renderGallery();
    });

    this.clearSearchBtn.addEventListener('click', () => {
      this.searchInput.value = '';
      this.searchQuery = '';
      this.clearSearchBtn.style.display = 'none';
      this.renderGallery();
      this.searchInput.focus();
    });

    // Reset filters
    this.resetFiltersBtn.addEventListener('click', () => {
      this.searchQuery = '';
      this.searchInput.value = '';
      this.clearSearchBtn.style.display = 'none';
      this.setActiveCategory('all');
    });

    // Category Tabs
    this.categoryTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const category = tab.getAttribute('data-category');
        this.setActiveCategory(category);
      });
    });

    // Favorites Filter Toggle
    this.favoritesFilterBtn.addEventListener('click', () => {
      if (this.activeCategory === 'favorites') {
        this.setActiveCategory('all');
      } else {
        this.setActiveCategory('favorites');
      }
    });

    // Layout toggles
    this.viewGridBtn.addEventListener('click', () => {
      this.viewGridBtn.classList.add('active');
      this.viewCompactBtn.classList.remove('active');
      this.galleryGrid.classList.remove('compact-view');
    });

    this.viewCompactBtn.addEventListener('click', () => {
      this.viewCompactBtn.classList.add('active');
      this.viewGridBtn.classList.remove('active');
      this.galleryGrid.classList.add('compact-view');
    });

    // Add Photo Modal
    this.openUploadBtn.addEventListener('click', () => this.openUploadModal());
    this.uploadModalCloseBtn.addEventListener('click', () => this.closeUploadModal());
    this.cancelUploadBtn.addEventListener('click', () => this.closeUploadModal());
    this.uploadModal.addEventListener('click', (e) => {
      if (e.target === this.uploadModal) this.closeUploadModal();
    });

    this.addPhotoForm.addEventListener('submit', (e) => this.handleNewPhotoSubmit(e));

    // Lightbox Controls
    this.lightboxCloseBtn.addEventListener('click', () => this.closeLightbox());
    this.lightboxModal.addEventListener('click', (e) => {
      if (e.target === this.lightboxModal) this.closeLightbox();
    });

    this.lightboxPrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.navigateLightbox(-1);
    });

    this.lightboxNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.navigateLightbox(1);
    });

    this.lightboxLikeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (this.currentLightboxItemIndex >= 0 && this.filteredItems[this.currentLightboxItemIndex]) {
        const item = this.filteredItems[this.currentLightboxItemIndex];
        this.toggleFavorite(item.id);
        const isLiked = this.favorites.has(item.id);
        this.lightboxLikeBtn.classList.toggle('liked', isLiked);
      }
    });

    this.downloadOrShareBtn.addEventListener('click', () => {
      if (this.currentLightboxItemIndex >= 0 && this.filteredItems[this.currentLightboxItemIndex]) {
        const item = this.filteredItems[this.currentLightboxItemIndex];
        navigator.clipboard.writeText(item.imageUrl).then(() => {
          this.showToast('Image link copied to clipboard!');
        }).catch(() => {
          this.showToast('Image link: ' + item.imageUrl);
        });
      }
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if (this.lightboxModal.classList.contains('open')) {
        if (e.key === 'Escape') this.closeLightbox();
        if (e.key === 'ArrowLeft') this.navigateLightbox(-1);
        if (e.key === 'ArrowRight') this.navigateLightbox(1);
      } else if (this.uploadModal.classList.contains('open')) {
        if (e.key === 'Escape') this.closeUploadModal();
      }
    });
  }

  // --- Filtering & Rendering ---
  setActiveCategory(category) {
    this.activeCategory = category;

    // Update active tab buttons
    this.categoryTabs.forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-category') === category);
    });

    this.favoritesFilterBtn.classList.toggle('active', category === 'favorites');
    this.renderGallery();
  }

  getFilteredItems() {
    return this.items.filter(item => {
      // Category match
      if (this.activeCategory === 'favorites') {
        if (!this.favorites.has(item.id)) return false;
      } else if (this.activeCategory !== 'all') {
        if (item.category.toLowerCase() !== this.activeCategory.toLowerCase()) return false;
      }

      // Search match
      if (this.searchQuery) {
        const titleMatch = item.title.toLowerCase().includes(this.searchQuery);
        const descMatch = item.description.toLowerCase().includes(this.searchQuery);
        const categoryMatch = item.category.toLowerCase().includes(this.searchQuery);
        const equipmentMatch = item.equipment.toLowerCase().includes(this.searchQuery);
        const difficultyMatch = item.difficulty.toLowerCase().includes(this.searchQuery);
        const tagsMatch = item.tags.some(tag => tag.toLowerCase().includes(this.searchQuery));

        return titleMatch || descMatch || categoryMatch || equipmentMatch || difficultyMatch || tagsMatch;
      }

      return true;
    });
  }

  renderGallery() {
    this.filteredItems = this.getFilteredItems();
    this.galleryGrid.innerHTML = '';

    if (this.filteredItems.length === 0) {
      this.emptyState.style.display = 'block';
    } else {
      this.emptyState.style.display = 'none';

      this.filteredItems.forEach((item, index) => {
        const card = this.createCardElement(item, index);
        this.galleryGrid.appendChild(card);
      });
    }

    this.updateMetrics();
  }

  createCardElement(item, index) {
    const isLiked = this.favorites.has(item.id);
    const diffClass = item.difficulty.toLowerCase().replace(/\s+/g, '-');

    const card = document.createElement('article');
    card.className = 'gallery-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details for ${item.title}`);

    card.innerHTML = `
      <div class="card-media">
        <img class="card-img" src="${item.imageUrl}" alt="${this.escapeHtml(item.title)}" loading="lazy">
        <div class="card-badges">
          <span class="badge badge-category">${item.category}</span>
          <span class="badge badge-difficulty ${diffClass}">${item.difficulty}</span>
        </div>
        <button class="card-like-btn ${isLiked ? 'liked' : ''}" data-id="${item.id}" aria-label="Favorite workout">
          <svg class="heart-svg" viewBox="0 0 24 24" width="18" height="18">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
      <div class="card-info">
        <h3 class="card-title">${this.escapeHtml(item.title)}</h3>
        <p class="card-description">${this.escapeHtml(item.description)}</p>
        <div class="card-tags">
          ${item.tags.slice(0, 3).map(tag => `<span class="tag-pill">#${this.escapeHtml(tag)}</span>`).join('')}
        </div>
        <div class="card-meta">
          <span class="meta-item">⏱️ ${item.duration}</span>
          <span class="meta-item">🔥 ${item.calories}</span>
        </div>
      </div>
    `;

    // Click card to open lightbox
    card.addEventListener('click', (e) => {
      // Don't trigger lightbox if user clicked like button
      if (e.target.closest('.card-like-btn')) return;
      this.openLightbox(index);
    });

    // Enter key support for accessibility
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (!e.target.closest('.card-like-btn')) {
          this.openLightbox(index);
        }
      }
    });

    // Like button handler
    const likeBtn = card.querySelector('.card-like-btn');
    likeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleFavorite(item.id);
      likeBtn.classList.toggle('liked', this.favorites.has(item.id));
    });

    return card;
  }

  toggleFavorite(id) {
    if (this.favorites.has(id)) {
      this.favorites.delete(id);
      this.showToast('Removed from favorites');
    } else {
      this.favorites.add(id);
      this.showToast('Added to favorites! ❤️');
    }
    this.saveFavorites();
    this.updateMetrics();

    // If currently filtering by favorites, refresh view
    if (this.activeCategory === 'favorites') {
      this.renderGallery();
    }
  }

  updateMetrics() {
    this.totalItemsCount.textContent = this.items.length;
    this.totalLikedCount.textContent = this.favorites.size;
    this.favCountBadge.textContent = this.favorites.size;
  }

  // --- Lightbox Operations ---
  openLightbox(index) {
    this.currentLightboxItemIndex = index;
    const item = this.filteredItems[index];
    if (!item) return;

    this.lightboxImg.src = item.imageUrl;
    this.lightboxImg.alt = item.title;
    this.lightboxTitle.textContent = item.title;
    this.lightboxSubtitle.textContent = `${item.category} • ${item.difficulty}`;
    this.lightboxCategory.textContent = item.category;
    this.lightboxDescription.textContent = item.description;
    this.lightboxDuration.textContent = item.duration;
    this.lightboxCalories.textContent = item.calories;
    this.lightboxDifficulty.textContent = item.difficulty;
    this.lightboxEquipment.textContent = item.equipment;

    // Tags
    this.lightboxTags.innerHTML = item.tags.map(tag => `<span class="tag-pill">#${this.escapeHtml(tag)}</span>`).join('');

    // Favorite state
    const isLiked = this.favorites.has(item.id);
    this.lightboxLikeBtn.classList.toggle('liked', isLiked);

    this.lightboxModal.classList.add('open');
    this.lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxModal.classList.remove('open');
    this.lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    this.currentLightboxItemIndex = -1;
  }

  navigateLightbox(direction) {
    if (this.filteredItems.length <= 1) return;
    let newIndex = this.currentLightboxItemIndex + direction;

    if (newIndex < 0) {
      newIndex = this.filteredItems.length - 1;
    } else if (newIndex >= this.filteredItems.length) {
      newIndex = 0;
    }

    this.openLightbox(newIndex);
  }

  // --- Upload / Add Photo Modal ---
  openUploadModal() {
    this.uploadModal.classList.add('open');
    this.uploadModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    document.getElementById('photoTitle').focus();
  }

  closeUploadModal() {
    this.uploadModal.classList.remove('open');
    this.uploadModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    this.addPhotoForm.reset();
  }

  handleNewPhotoSubmit(e) {
    e.preventDefault();

    const title = document.getElementById('photoTitle').value.trim();
    const category = document.getElementById('photoCategory').value;
    const difficulty = document.getElementById('photoDifficulty').value;
    const imageUrl = document.getElementById('photoUrl').value.trim();
    const duration = document.getElementById('photoDuration').value.trim() || '45 mins';
    const calories = document.getElementById('photoCalories').value.trim() || '400 kcal';
    const equipment = document.getElementById('photoEquipment').value.trim() || 'Standard Equipment';
    const description = document.getElementById('photoDescription').value.trim() || 'A high-energy fitness session designed to challenge strength and cardiovascular endurance.';
    const rawTags = document.getElementById('photoTags').value.trim();

    let tags = [];
    if (rawTags) {
      tags = rawTags.split(',').map(t => t.trim().toLowerCase().replace(/[^a-z0-9]/g, '')).filter(Boolean);
    }
    if (tags.length === 0) {
      tags = [category.toLowerCase(), "fitness"];
    }

    const newItem = {
      id: 'fit-' + Date.now(),
      title,
      category,
      difficulty,
      duration,
      calories,
      equipment,
      imageUrl,
      description,
      tags
    };

    // Prepend new item to the top
    this.items.unshift(newItem);
    this.saveItems();
    this.closeUploadModal();
    this.showToast('Workout added to gallery successfully! 🎉');

    // Switch to category of added item or 'all' to show it
    this.setActiveCategory('all');
  }

  // --- Toast Notifications ---
  showToast(message) {
    if (!this.toastNotification) return;
    this.toastNotification.textContent = message;
    this.toastNotification.classList.add('show');

    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }

    this.toastTimeout = setTimeout(() => {
      this.toastNotification.classList.remove('show');
    }, 2800);
  }

  // --- Utility ---
  escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
}

// Instantiate application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new FitnessGalleryApp();
});
